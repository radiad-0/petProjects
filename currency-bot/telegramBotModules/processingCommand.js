import {
    addAccountDetailsToBuffer, createExecuteMultipleFunctionsFunction, createSendMessageAndSetNexCommandFunction,
    createValidateAndTryAgainFunction,
    displayPrice,
    getFileIdOfPhotoOrDocument,
    sendUserData
} from "./processingTools.js";
import {processingTextCommands} from "./processingTextCommands.js";
import {chatbotManagement} from "./chatbotManagement.js";
import {isNumber} from "../tools/tools.js";
import {bot} from "./bot.js";
import {chooseYesOrNoOptions} from "./options.js";
import {processingButton} from "./processingButton.js";
import {doc} from "../tools/googleSpreadsheets/googleSpreadsheets.js";

const commands = {
    textCommand: processingTextCommands,

    userNameDetails: createExecuteMultipleFunctionsFunction(
        addAccountDetailsToBuffer,
        createSendMessageAndSetNexCommandFunction('Введите имя владельца кошелька:', 'accountDetails')
    ),

    accountDetails: createExecuteMultipleFunctionsFunction(
        addAccountDetailsToBuffer,
        createSendMessageAndSetNexCommandFunction('Укажите количество юаней (¥), которое хотите получить:',
            'validatePrice')
    ),
    validatePrice: createValidateAndTryAgainFunction('accountDetails', 'Цена должна быть числом❗', 'calcPrice',
        function (userData) {
            return isNumber(userData.text)
        }),

    calcPrice: async function (userData, price = undefined) {
        chatbotManagement[userData.from.id].buffer.courseAlmaz = chatbotManagement.almaz.courseAlmaz
        chatbotManagement[userData.from.id].buffer.courseForPeople = chatbotManagement.almaz.courseForPeople
        if (price === undefined) await displayPrice(userData.from.id, userData.text)
        else await displayPrice(userData.from.id, price)
    },

    moneyTransfer: createSendMessageAndSetNexCommandFunction('Отправьте скриншот перевода:',
        'validateScreenshot'),
    validateScreenshot: createValidateAndTryAgainFunction('moneyTransfer', 'Это не фото и не документ❗️', 'screenshot',
        function (userData) {
            chatbotManagement[userData.from.id].buffer.screenshotId = getFileIdOfPhotoOrDocument(userData)
            return userData.document || userData.photo
        }),

    screenshot: async function (userData) {
        chatbotManagement[userData.from.id].command = 'textCommand'

        if (chatbotManagement[userData.from.id].buffer.courseAlmaz === chatbotManagement.almaz.courseAlmaz ||
            chatbotManagement[userData.from.id].buffer.courseForPeople === chatbotManagement.almaz.courseForPeople) {
            await bot.sendMessage(userData.from.id, 'Спасибо за покупку 🙂\n\n' +
                '<em>Юани поступят к вам на указанный счёт в ближайшее время</em>', {parse_mode: 'HTML'})

            await sendUserData(userData.from.id)
        } else {
            await bot.sendMessage(userData.from.id, 'Курс рубля поменялся, обновленные данные:')
            await this.calcPrice(userData, chatbotManagement[userData.from.id].buffer.priceYen)
        }
        chatbotManagement.clearBuffer(userData.from.id)
    },

    start: async function (userData) {
        await bot.sendMessage(userData.from.id, `Курс для тебя: ${chatbotManagement.almaz.courseAlmaz}\nКурс для человеков: ${chatbotManagement.almaz.courseForPeople}`)
        await bot.sendMessage(userData.from.id, 'Хотите изменить курс?\nЕсли да - нажмите "ДА"\nЕсли нет - нажмите "НЕТ"', chooseYesOrNoOptions)
        chatbotManagement[userData.from.id].command = 'textCommand'
    },
    courseForPeople: async function (userData, notCheckNumber = false) {
        if (isNumber(userData.text) || notCheckNumber) {
            if (!notCheckNumber) chatbotManagement.almaz.courseForPeople = userData.text
            chatbotManagement[userData.from.id].command = 'courseAlmaz'
            await bot.sendMessage(userData.from.id, 'Курс (¥ -> ₽, Для Меня)')
        } else {
            await bot.sendMessage(userData.from.id, 'ПИШИ ЦИФЕРКИ ЧЕРЕЗ ✅ТОЧКУ (.)✅, ❌ЗАПЯТЫЕ (,)❌ НЕ РАБОТАЮТ')
            chatbotManagement[userData.from.id].command = 'textCommand'
            userData.data = 'YESButton'
            await processingButton(userData)
        }
    },
    courseAlmaz: async function (userData) {
        if (isNumber(userData.text)) {
            chatbotManagement.almaz.courseAlmaz = userData.text

            const sheet = await doc.sheetCourse()
            await sheet.addToRow(0, {
                'Курс (¥ -> ₽, Для Русского Клиента)': chatbotManagement.almaz.courseForPeople,
                'Курс (¥ -> ₽, Для Меня)': chatbotManagement.almaz.courseAlmaz,
            })

            await createSendMessageAndSetNexCommandFunction('Готово, курсы успешно изменены',
                'start')(userData)
            await processingCommand(userData)
        } else {
            await bot.sendMessage(userData.from.id, 'ПИШИ ЦИФЕРКИ ЧЕРЕЗ ✅ТОЧКУ (.)✅, ❌ЗАПЯТЫЕ (,)❌ НЕ РАБОТАЮТ')
            await this.courseForPeople(userData, true)
        }
    },
}


export async function processingCommand(msg) {
    if (await processingTextCommands(msg, false)) return
    if (chatbotManagement[msg.from.id].command in commands) await commands[chatbotManagement[msg.from.id].command](msg)
    else await processingTextCommands(msg)
}