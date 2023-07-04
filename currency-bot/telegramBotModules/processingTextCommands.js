import {bot} from "./bot.js";
import {chooseCashAccountOptions, showMainMenuOptions} from "./options.js";
import {chatbotManagement} from "./chatbotManagement.js";
import {processingCommand} from "./processingCommand.js";

const textCommands = {
    '/start': async function (userData) {
        await bot.sendMessage(userData.from.id, `Добро пожаловать, ${userData.from.first_name}!`, showMainMenuOptions)
    },
    'Купить юани 💱': async function (userData) {
        await bot.sendMessage(userData.from.id, `Текущий курс: ${chatbotManagement.almaz.courseForPeople}`)
        await bot.sendMessage(userData.from.id, 'Выберете способ получения юаней:', chooseCashAccountOptions)
        chatbotManagement[userData.from.id].command = 'textCommand'
    },
    'Узнать курс юаня 💹': async function (userData) {
        if (userData.from.id === chatbotManagement.almaz.chatId) {
            chatbotManagement[userData.from.id].command = 'start'
            userData.text = "I'm GOD"
            await processingCommand(userData)
        }
        else {
            await bot.sendMessage(userData.from.id, `Курс: ${chatbotManagement.almaz.courseForPeople}`)
        }
    },
    'Поддержка 🤳': async function (userData) {
        chatbotManagement[userData.from.id].command = 'textCommand'
        await bot.sendMessage(userData.from.id, 'Напишите ему: @lee_jao')
    },
    default: async function (msg) {
        await bot.sendMessage(msg.from.id, 'Неизвестная команда\n/start - запустить бота')
    }
}

export async function processingTextCommands(msg, executeDefault = true) {
    if (msg.text in textCommands) {
        await textCommands[msg.text](msg)
        chatbotManagement[msg.from.id].command = 'textCommand'
        return true
    }
    else if (executeDefault) {
        await textCommands.default(msg)
        return true
    }
    else return false
}