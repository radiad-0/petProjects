import {bot} from "./bot.js";
import {finalConfirmOptions, removeKeyboardOptions} from "./options.js";
import {
    createSendMessageAndSetNexCommandFunction,
    getFileIdOfPhotoOrDocument,
    getImageUrlFromFileId
} from "./processingTools.js";
import {chatbotManagement} from "./chatbotManagement.js";
import {doc} from "../tools/googleSpreadsheets/googleSpreadsheets.js";
import {sleep} from "../tools/tools.js";
import {dbManager} from "../tools/dbManager.js";

const chinaChel = {
    "/start": async function (msg) {
        await bot.sendMessage(msg.from.id, `Добро пожаловать, ${msg.from.first_name}!\n` +
            'Сюда будет приходить информация о покупке юаней\n\n' +
            `欢迎, ${msg.from.first_name}!\n` +
            '买人民币的信息会在这里', removeKeyboardOptions)
    },
    textCommand: async function (userData) {
        let message = await bot.sendMessage(userData.from.id, 'Неизвестная команда\n/start - запустить бота')
        chatbotManagement.chinaChel.messageIds.push(message.message_id)
    },

    confirmButton: async function (userData) {
        let message = await createSendMessageAndSetNexCommandFunction('Отправьте скриншот перевода:',
            'validateScreenshot')(userData)
        chatbotManagement.chinaChel.messageIds.push(message.message_id)
    },

    validateScreenshot: async function (userData) {
        const chatId = userData.from.id
        if (userData.document || userData.photo) {
            chatbotManagement[chatId].command = 'textCommand'
            chatbotManagement.chinaChel.currentOrderData.managerScreenshotFileId = getFileIdOfPhotoOrDocument(userData)
            let message = await bot.sendMessage(chatId, 'Финальное подтверждение️', finalConfirmOptions)
            chatbotManagement.chinaChel.messageIds.push(message.message_id)
        } else {
            let message = await bot.sendMessage(chatId, 'Это не фото и не документ❗️')
            chatbotManagement.chinaChel.messageIds.push(message.message_id)
            await this.confirmButton(userData)
        }
    },

    finalConfirmButton: async function (userData) {
        if (chatbotManagement.chinaChel.currentOrderData === {} ||
            chatbotManagement.chinaChel.currentOrderData.clientChatId === undefined ||
            chatbotManagement.chinaChel.currentOrderData.managerScreenshotFileId === undefined ||
            chatbotManagement.chinaChel.currentOrderData.managerChatId === undefined) {
            await bot.sendMessage(userData.from.id, 'Что-то пошло не так❗️')
        } else {
            await bot.sendPhoto(chatbotManagement.chinaChel.currentOrderData.clientChatId, chatbotManagement.chinaChel.currentOrderData.managerScreenshotFileId, {
                parse_mode: 'HTML',
                caption: `Юани доставлены ✅\n\n` +
                    `<b>${chatbotManagement.chinaChel.currentOrderData.priceRub}₽ -> ${chatbotManagement.chinaChel.currentOrderData.priceYen}¥</b>`
            })

            const sheet = await doc.sheetCurrency()
            const result = sheet.findInSheet(String(chatbotManagement.chinaChel.currentOrderData.order))

            if (result.isFound) {
                sheet.sheetRows[result.rowsIndexes[0]]['Скрин (Перевод ¥)'] = `=IMAGE("${(await getImageUrlFromFileId(chatbotManagement.chinaChel.currentOrderData.managerScreenshotFileId))}"; 1)`
                try {
                    await sheet.sheetRows[result.rowsIndexes[0]].save()
                } catch (e) {
                    console.error(e.message)
                    sleep(10000)
                }
            }

            for (let messageId of chatbotManagement.chinaChel.currentOrderData.messageIds) {
                try {
                    await bot.deleteMessage(chatbotManagement.chinaChel.currentOrderData.managerChatId, messageId)
                } catch (e) {
                    console.log(`не удалось удалить сообщение(db). chatId: ${chatbotManagement.chinaChel.currentOrderData.managerChatId}; messageId: ${messageId}`)
                }
            }
            for (let messageId of chatbotManagement.chinaChel.messageIds) {
                try {
                    await bot.deleteMessage(chatbotManagement.chinaChel.currentOrderData.managerChatId, messageId)
                } catch (e) {
                    console.log(`не удалось удалить сообщение(local). chatId: ${chatbotManagement.chinaChel.currentOrderData.managerChatId}; messageId: ${messageId}`)
                }
            }
            chatbotManagement.chinaChel.currentOrderData.managerChatId = []
            chatbotManagement.chinaChel.messageIds = []
        }
    }
}


export async function chinaChelProcessing(userData) {
    if (userData.message_id) chatbotManagement.chinaChel.messageIds.push(userData.message_id)
    if (userData.data && /order/.test(userData.data)) {
        const orderData = JSON.parse(userData.data)
        const data = dbManager.data
        chatbotManagement.chinaChel.currentOrderData = data[orderData.order]
        chinaChel[orderData.button](userData)
    } else {
        let data
        if (userData.text === '/start') data = userData.text
        else data = userData.data ? userData.data : chatbotManagement.chinaChel.command
        if (data in chinaChel) await chinaChel[data](userData)
        else {
            let message = await bot.sendMessage(userData.from.id, 'Неизвестная команда\n/start - запустить бота')
            chatbotManagement.chinaChel.messageIds.push(message.message_id)
        }
    }
}