import {bot} from "./telegramBotModules/bot.js";
import {chatbotManagement} from "./telegramBotModules/chatbotManagement.js";
import {processingCommand} from "./telegramBotModules/processingCommand.js";
import {processingButton} from "./telegramBotModules/processingButton.js";
import {chinaChelProcessing} from "./telegramBotModules/chinaChelProcessing.js";
import {doc} from "./tools/googleSpreadsheets/googleSpreadsheets.js";

const sheet = await doc.sheetCourse()
chatbotManagement.almaz.courseAlmaz = sheet.getColumnByHeader['Курс (¥ -> ₽, Для Меня)'][0]
chatbotManagement.almaz.courseForPeople = sheet.getColumnByHeader['Курс (¥ -> ₽, Для Русского Клиента)'][0]

bot.on('message', async function (msg) {
    if (msg.from.id === chatbotManagement.chinaChel.chatId) {
        await chinaChelProcessing(msg)
        return
    }
    await chatbotManagement.initState(msg)
    console.log(`event: message, id: ${msg.from.id}, username: ${msg.from.username}, text: ${msg.text}, chatbotManagement_data: ${chatbotManagement[msg.from.id].command}`)
    await processingCommand(msg)
})

bot.on('callback_query', async function (query) {
    if (query.from.id === chatbotManagement.chinaChel.chatId) {
        await chinaChelProcessing(query)
        return
    }
    await chatbotManagement.initState(query)
    console.log(`event: callback_query, id: ${query.from.id}, username: ${query.from.username}, text: ${query.message.text}, query_data: ${query.data}`)
    await processingButton(query)
})