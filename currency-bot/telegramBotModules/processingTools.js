import {bot, token} from "./bot.js";
import {chatbotManagement} from "./chatbotManagement.js";
import {processingCommand} from "./processingCommand.js";
import {chooseReadyOrCancelOptions} from "./options.js";
import {getRequest, isNumber, sleep} from "../tools/tools.js";
import {doc} from "../tools/googleSpreadsheets/googleSpreadsheets.js";
import {dbManager} from "../tools/dbManager.js";

export function createSendMessageAndSetNexCommandFunction(message = 'сообщение', nextCommand = 'textCommand') {
    return async function (userData) {
        chatbotManagement[userData.from.id].command = nextCommand
        return await bot.sendMessage(userData.from.id, message)
    }
}

export function createExecuteMultipleFunctionsFunction(...functions) {
    return async function (userData) {
        for (let func of functions) await func(userData)
    }
}

export function createValidateAndTryAgainFunction(tryAgainCommand, tryAgainMessage, nextCommand, filter = () => true) {
    return async function (userData) {
        if (filter(userData))
            chatbotManagement[userData.from.id].command = nextCommand
        else
            await createSendMessageAndSetNexCommandFunction(tryAgainMessage, tryAgainCommand)(userData)

        await processingCommand(userData)
    }
}

export async function displayPrice(chatId, price) {
    const data = dbManager.data
    let orderNumber
    if (data.orders.length) {
        orderNumber = data.orders[data.orders.length - 1] + 1
        data.orders.push(orderNumber)
    } else {
        const sheet = await doc.sheetCurrency()

        const lastOrderNumber = sheet.columns[0][sheet.columns[0].length - 1]
        if (isNumber(lastOrderNumber)) {
            orderNumber = parseFloat(lastOrderNumber) + 1
            data.orders.push(orderNumber)
        }
        else {
            orderNumber = lastOrderNumber + '1'
            data.orders.push(0)
        }
    }
    data.chatIdAndOrder[chatId] = orderNumber
    sleep(500)
    dbManager.data = data

    const priceRub = Math.ceil(price * chatbotManagement.almaz.courseForPeople)

    chatbotManagement[chatId].buffer.priceYen = price
    chatbotManagement[chatId].buffer.priceRub = priceRub
    chatbotManagement[chatId].buffer.priceRubAlmaz = Math.ceil(price * chatbotManagement.almaz.courseAlmaz)

    chatbotManagement[chatId].command = 'textCommand'

    const message = `Курс: ${chatbotManagement.almaz.courseForPeople}₽

Вы получаете: ${price}¥
Вы отдаёте: ${priceRub}₽

❗️Оплатите <code>${priceRub}</code>₽ на карту:

—————————
Цюй Суннань
—————————
Тинькоф ✔
—————————
<code>+7 (931) 272-99-56</code>
—————————
C комментарием <code>${orderNumber}</code>`

    await bot.sendMessage(chatId, message, chooseReadyOrCancelOptions)
}

export function addAlipayToBuffer(userData) {
    chatbotManagement[userData.from.id].buffer.alipay = true
    chatbotManagement[userData.from.id].buffer.another = false
}

export function addAnotherToBuffer(userData) {
    chatbotManagement[userData.from.id].buffer.alipay = false
    chatbotManagement[userData.from.id].buffer.another = true
}

export function addAccountDetailsToBuffer(userData) {
    if (!chatbotManagement[userData.from.id].buffer.accountDetails) chatbotManagement[userData.from.id].buffer.accountDetails = userData.text
    else chatbotManagement[userData.from.id].buffer.accountUserName = userData.text
}

export function getFileIdOfPhotoOrDocument(userData) {
    let fileId
    if (userData.document) fileId = userData.document.file_id
    if (userData.photo) fileId = userData.photo.pop().file_id
    return fileId
}

export async function getImageUrlFromFileId(fileId) {
    let url = `https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`
    let answer = await getRequest(url)
    if (answer.data.ok) {
        url = `https://api.telegram.org/file/bot${token}/${answer.data.result.file_path}`
        return url
    }
    else return undefined
}

export async function sendUserData(chatId) {
    const sheet = await doc.sheetCurrency()

    const data = dbManager.data
    const orderNumber = data.chatIdAndOrder[chatId]

    console.log(`id: ${chatId}, order: ${orderNumber}`)

    const orderData = {
        order: orderNumber,
        date: chatbotManagement.currentTime,
        courseForPeople: chatbotManagement[chatId].buffer.courseForPeople,
        courseAlmaz: chatbotManagement[chatId].buffer.courseAlmaz,
        priceRub: chatbotManagement[chatId].buffer.priceRub,
        priceRubAlmaz: chatbotManagement[chatId].buffer.priceRubAlmaz,
        priceYen: chatbotManagement[chatId].buffer.priceYen,
        profit: chatbotManagement[chatId].buffer.priceRub - chatbotManagement[chatId].buffer.priceRubAlmaz,
        paymentType: chatbotManagement[chatId].buffer.alipay ? 'Alipay' : 'Другое',
        paymentDetails: chatbotManagement[chatId].buffer.accountDetails,
        paymentUserName: chatbotManagement[chatId].buffer.accountUserName,
        screenshotFileId: chatbotManagement[chatId].buffer.screenshotId,
        clientChatId: chatId,
        managerChatId: chatbotManagement.chinaChel.chatId,
        messageIds: []
    }

    await sheet.addColumns({
        'Номер заказа': [orderData.order],
        'Дата и время': [orderData.date],
        'Курс (¥ -> ₽), Для клиента': [orderData.courseForPeople],
        'Курс (¥ -> ₽), для меня': [orderData.courseAlmaz],
        '₽ (Русский Клиент -> Мы)': [orderData.priceRub],
        '₽ (Для меня)': [orderData.priceRubAlmaz],
        '¥ (Мы -> Русский Клиент)': [orderData.priceYen],
        'Прибыль, ₽': [orderData.profit],
        'Карта клиента (Деньги сюда!)': [orderData.paymentType],
        'Номер карты клиента (Деньги сюда!)': [orderData.paymentDetails],
        'Имя владельца карты клиента': [orderData.paymentUserName],
        'Скрин (перевод ₽)': [`=IMAGE("${(await getImageUrlFromFileId(orderData.screenshotFileId))}"; 1)`],
    })

    let message = await bot.sendMessage(orderData.managerChatId, `Номер заказа: ${orderData.order}\n\n` +
        `Курс (¥ -> ₽, для русских клиентов): ${orderData.courseForPeople}\n` +
        `<b>Курс (¥ -> ₽, для Алмаза): ${orderData.courseAlmaz}❗️</b>\n\n` +
        `₽ (Русский Клиент -> Мы): ${orderData.priceRub}\n` +
        `¥ (Мы -> Русский Клиент): <code>${orderData.priceYen}</code>\n\n` +
        `Карта клиента (Деньги сюда!): ${orderData.paymentType}\n` +
        `<b>Номер карты клиента (Деньги сюда!)</b>: <code>${orderData.paymentDetails}</code>`, {parse_mode: 'HTML'})
    orderData.messageIds.push(message.message_id)

    message = await bot.sendMessage(orderData.managerChatId, `订单号: ${orderData.order}\n\n` +
        `价格（¥ -> ₽，俄罗斯客户）: ${orderData.courseForPeople}\n` +
        `<b>费率（¥ -> ₽，钻石）: ${orderData.courseAlmaz}❗️</b>\n\n` +
        `₽（俄罗斯客户 -> 我们）: ${orderData.priceRub}\n` +
        `¥（我们 -> 俄罗斯客户）: <code>${orderData.priceYen}</code>\n\n` +
        `客户卡（钱在这里！）: ${orderData.paymentType}\n` +
        `<b>客户卡号（这里是钱！）</b>: <code>${orderData.paymentDetails}</code>`, {parse_mode: 'HTML'})
    orderData.messageIds.push(message.message_id)

    message = await bot.sendPhoto(orderData.managerChatId, orderData.screenshotFileId, {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Подтвердить оплату', callback_data: `{"button":"confirmButton","order":"${orderData.order}"}`}],
            ]
        },
        caption: `Комментарий ${orderData.order}`
    })
    orderData.messageIds.push(message.message_id)

    data[orderData.order] = orderData
    dbManager.data = data
}