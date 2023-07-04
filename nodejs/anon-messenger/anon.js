import TelegramApi from 'node-telegram-bot-api'

const token = '1164747327:AAGC2LouBuVoWaHDM4bBSI6mHURFLqcSrR0'

const bot = new TelegramApi(token, {polling: true})

// 720361110
// 123122 - almaz

// 123123 - kitaez
// 123124 - prosto_chel

const chats = getChats([
    [720361110],
    [123123, 123124]
])

bot.on('message', async function (msg) {
    console.log(`event: message, id: ${msg.from.id}, username: ${msg.from.username}, text: ${msg.text}`)

    const chatId = msg.from.id
    if (chatId in chats) {
        for (let id of chats[chatId])
            await bot.sendMessage(id, msg.text, removeKeyboardOptions)
    }
    else {
        await bot.sendMessage(chatId, "СТОЙ! НЕОПОЗНАННЫЙ ЧЕЛОВЕК!!", removeKeyboardOptions)
        await bot.sendSticker(chatId, 'CAACAgIAAxkBAAINKWP_YhSbe4uCeKQZLvlNXOzfjlU6AAJSDAACmz7JSRCSGjnjyGzuLgQ', removeKeyboardOptions)
        await bot.sendMessage(chatId, "(для того чтобы попасть в чат - напишите разработчику (то есть мне°^°))", removeKeyboardOptions)
        await bot.sendSticker(chatId, 'CAACAgIAAxkBAAINIGP_YfD-FHTn3zuu7j49YS-Fmc1jAAJoAANDM50hF7O0MGcmqDMuBA', removeKeyboardOptions)
        await bot.sendMessage(chatId, "(если вы не знаете меня, то напишите тому кто знает(лол логично же))", removeKeyboardOptions)
    }
})

function getChats(chatList) {
    const chats = {}

    for (let chat of chatList)
        for (let id of chat)
            if (id in chats) chats[id].push(...chat.filter(value => value !== id))
            else chats[id] = chat.filter(value => value !== id)

    return chats
}

const removeKeyboardOptions = {
    reply_markup: {
        remove_keyboard: true
    }
}