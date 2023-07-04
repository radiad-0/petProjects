import { GoogleSpreadsheet } from 'google-spreadsheet'
import {Sheets} from "./sheets.js"
import {Sheet} from "./sheet.js"

const GOOGLE_SPREADSHEET_ID_1 = '1u6IGDERd_egDvE3dvYbpgv3QeDLFPjWeiua-VkyeQUU'
const GOOGLE_SPREADSHEET_ID_2 = '1iXc4SK2_WBBunQmrZPIyyENnA5h94Zd6vM9qteQjGic'
const GOOGLE_SPREADSHEET_ID_3 = '1dqUoQKY4ar1-CUsDKFxdBSQKhZTaYEOBOiA-0BEcU9o'
const GOOGLE_SERVICE_ACCOUNT_EMAIL = 'telegram-bot@telegram-bot-370714.iam.gserviceaccount.com'
const GOOGLE_PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDH9yfs8Eu8vCmx\ngOhWgKnnIGL2ewWdPBcSC3hX0kYPXTLoAJdo0Tn+toYPzDZG9mXtEitimlTmlLIG\n8GL5DzcPqaQGuXknsidrYf6rstDucpaKn4gmJ0gU38bvgHRjpmpbTX+bxQYXlC/G\nr/hnDmG0whZcPdSxbsytj9aA1FRSNINDD8ny4+V9hYEgFCwhp/DYulGj7Y/maInH\nVInu3j7OlPkZEz345rG/Pr6HJPUSLm0NfR6sePkWZXKgBJf/IfJ/AyuwYPx4qnV+\nUoL9pgO/ZyTwRXu70d/pPTNVPBfrgwcqxhCbKc2MqnL5KyIVM6AJju38Yr3+LoWl\nTs2mpKy9AgMBAAECggEAIZt139oA+J7tKPJ/2e304C3uw/soFeWAAR3hY20pLjLd\nN+XFjK3BYABAJs6M/r8xoTbxCLjkdP5fr0/eanp2qBC8Sw8IADZubptBKI08lR64\nE2M9iCAI+s0jS6Rcq1TQQjkTrdPesr7KisuPZY6iuDT4ehdANHPpPXBTvkIxS8FQ\nU5xdlnl47mVxa0nbEd2xrr51cKEtNcuvoh8AYHWJbKO6djN5A6f6UQMBESqjtrzY\n64DwWevCY1EApb4cclABR1YNLKwITM/p3u95VuWyNCymc1yG3ljKqmnNZFJq9kuV\n8Vb66ZYlQnZ7ySHa5CHaTf0o6+SjBjVGMU8GVDW2VwKBgQD1P1x6qbBl5owuITDq\njKY1sQUUWs0JBN4/jNSbM3XIiVbqN7Qk1ep+6UcYheSXK6aVfRmUixK/+f0dyenU\nVIZcebQ3bbHo44pL1BKgBOWFkWbJgHSHuHar8vBFRKRVUm+uAf66zSDdubEVyLr6\nhgGt5VyrfTnWc9BVsYXluhmdywKBgQDQu41xmFDa+BURY7Sc00oYHQBvVd9lB5ER\nEa75fnsd0ZAfo7kt9WVeosHyHmdhpTUSw9yZcErBYKkVrpBRg8J9vIeePH8m5nrH\nh2DfU1876GsAJzhXG9OSzu3c2eWgTJ6e9/jYudkJ11OJnSBgIYKQAV5u9SWbIr9s\nQ3oTw8aOlwKBgFWGtjKU0M6ImyRPMObrC9+3jyTtEYnup68T5uUFCjNYKfZeXLVn\n4HJH2iJkNza840hIq04RPgWzIaFs093XaFABpWabG6szBvywxZoGeyCcd3MYGAto\nugH3I/GUIZcbu5S8X2A3vxlz85y8NvC9IQLK9QldD3mJRANOeHqH7v0HAoGAV51y\nOK1bux4JEdyNMorJ/icmSJV+CNVNQiHvFVDO8uxFF9LMZwsrerbMvAmhEW6cQX0v\nOsTUzCj7sFsuvtiUqdyZ/ISeRsDV5qzfr746KlZbm5va3U2T2Hq9g0d/SHMA3e9u\nZ+JSxPu6V/g5X8CRIktAzUhfeafzO8lzE5rI3I8CgYEA4/18FxwfrLbMB0+M02kZ\nuaAhQbp4jvLgdo+xLtnSHrXIoMspq5ULUV81uKZPFX5zzTb4J3huTgaitU2fkUSz\nb4WJbrxijNtEL56ancYnz5bjCS3iaRTSgxz6AEFX/7EQUJaTKc7+Ofwiv7ZukTDQ\nCgSY+3RfrHHlLq1s5ijyFjQ=\n-----END PRIVATE KEY-----\n'

const doc1 = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID_1);
await doc1.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY
});

const doc2 = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID_2);
await doc2.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY
});

const doc3 = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID_3);
await doc3.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY
});

export const doc = {
    doc1: doc1,
    doc2: doc2,
    doc3: doc3,
    /**
     * треки-рейсы-статусы, все листы.
     * Загрузка заголовков и строк из таблицы.
     * Для обнавления данных надо заново вызывать этот метод.
     * @returns {Promise<Sheets>}
     */
    async sheets() {
        await this.doc1.loadInfo()
        const sheets1 = new Sheets(this.doc1)
        await sheets1.load()
        return sheets1
    },
    /**
     * Основная база, только первый лист.
     * Загрузка заголовков и строк из таблицы.
     * Для обнавления данных надо заново вызывать этот метод.
     * @returns {Promise<Sheet>}
     */
    async sheet() {
        await this.doc2.loadInfo()
        const sheet = new Sheet(doc2.sheetsByIndex[0], 2)
        await sheet.load()
        return sheet
    },
    /**
     * Администрирование бота, только первый лист.
     * Загрузка заголовков и строк из таблицы.
     * Для обнавления данных надо заново вызывать этот метод.
     * @returns {Promise<Sheet>}
     */
    async admin() {
        await this.doc3.loadInfo()
        const sheet = new Sheet(doc3.sheetsByIndex[0], 2)
        await sheet.load()
        return sheet
    },
}

// Код для тестов
// const sheet = await doc.sheet()
// console.log(sheet.headerValues)
// console.log(sheet.rows)
// console.log(sheet.columns)
//
// console.log(sheet.findInSheet('JDVB19246508374'))