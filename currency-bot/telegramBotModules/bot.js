import TelegramApi from 'node-telegram-bot-api'

export const token = 'token'

export const bot = new TelegramApi(token, {polling: true})
