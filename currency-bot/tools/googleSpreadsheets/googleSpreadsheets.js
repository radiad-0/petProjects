import {GoogleSpreadsheet} from 'google-spreadsheet'
import {Sheet} from "./sheet.js"
import {chatbotManagement} from "../../telegramBotModules/chatbotManagement.js";
import {getImageUrlFromFileId} from "../../telegramBotModules/processingTools.js";
import {sleep} from "../tools.js";

const GOOGLE_SPREADSHEET_ID1 = 'GOOGLE_SPREADSHEET_ID1'
const GOOGLE_SERVICE_ACCOUNT_EMAIL = 'GOOGLE_SERVICE_ACCOUNT_EMAIL'
const GOOGLE_PRIVATE_KEY = 'GOOGLE_PRIVATE_KEY'

const doc1 = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID1);
await doc1.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY
});

export const doc = {
    doc1: doc1,
    /**
     * Валютная таблица.
     * Загрузка заголовков и строк из таблицы.
     * Для обнавления данных надо заново вызывать этот метод.
     * @returns {Promise<Sheet>}
     */
    async sheetCurrency() {
        await this.doc1.loadInfo()
        const sheet = new Sheet(doc1.sheetsByIndex[0])
        await sheet.load()
        return sheet
    },
    /**
     * Таблица с chatId валютного бота.
     * Загрузка заголовков и строк из таблицы.
     * Для обнавления данных надо заново вызывать этот метод.
     * @returns {Promise<Sheet>}
     */
    async sheetCurrencyChatId() {
        await this.doc1.loadInfo()
        const sheet = new Sheet(doc1.sheetsByIndex[2])
        await sheet.load()
        return sheet
    },
    /**
     * Таблица с курсом валютного бота.
     * Загрузка заголовков и строк из таблицы.
     * Для обнавления данных надо заново вызывать этот метод.
     * @returns {Promise<Sheet>}
     */
    async sheetCourse() {
        await this.doc1.loadInfo()
        const sheet = new Sheet(doc1.sheetsByIndex[1])
        await sheet.load()
        return sheet
    }
}

// Код для тестов
// const sheet = await doc.sheetCurrency()
// console.log(sheet.rows)
// console.log(sheet.columns)
// console.log(sheet.columns[0][sheet.columns[0].length - 1])
// console.log(sheet.columns)
//
// console.log(sheet.findInSheet('JDVB19246508374'))

// await sheet.addColumns({
//     'Номер заказа': ['test', 'test'],
//     'Дата и время': ['test'],
//     'Курс (¥ -> ₽)': ['test'],
//     '₽ (Русский Клиент -> Мы)': ['test'],
//     '₽ (Для меня)': ['test'],
//     '¥ (Мы -> Русский Клиент)': ['test'],
//     'Прибыль, ₽': ['test'],
//     'Карта клиента (Деньги сюда!)': ['test'],
//     'Номер карты клиента (Деньги сюда!)': ['test'],
//     'Скрин': ['test'],
// })

// {
//     alipay: false,
//     another: true,
//     accountDetails: 'asd',
//     courseAlmaz: undefined,
//     courseForPeople: 999,
//     priceYen: '123',
//     priceRub: 122877,
//     priceRubAlmaz: NaN,
//     screenshotId: 'AgACAgIAAxkBAAIWBGQCmlrbDpFW-9LdV-LzOqfej8l7AAJyxjEb1xoYSAuLNdO7A0llAQADAgADeQADLgQ'
// }



