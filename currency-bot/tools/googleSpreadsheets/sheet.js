import {chatbotManagement} from "../../telegramBotModules/chatbotManagement.js";
import {sleep} from "../tools.js";
import {getImageUrlFromFileId} from "../../telegramBotModules/processingTools.js";

export class Sheet {
    constructor(sheet, headerRowIndex = 1) {
        this.headerRowIndex = headerRowIndex
        this.sheet = sheet
        this.headerValues = []
        this.rows = []
        this.columns = []
        this.getColumnByHeader = {}
        this.sheetRows = []
    }

    async load() {
        await this.sheet.loadHeaderRow(this.headerRowIndex)
        this.headerValues = this.sheet.headerValues

        this.sheetRows = await this.sheet.getRows()
        for (let i = 0; i < this.sheetRows.length; i++) {
            this.rows.push([])
            for (let j = 0; j < this.headerValues.length; j++)
                this.rows[i].push(this.sheetRows[i][this.headerValues[j]])
        }

        for (let i = 0; i < this.headerValues.length; i++) {
            this.columns.push([])
            this.getColumnByHeader[this.headerValues[i]] = []
            for (let j = 0; j < this.rows.length; j++) {
                this.columns[i].push(this.rows[j][i])
                this.getColumnByHeader[this.headerValues[i]].push(this.rows[j][i])
            }
        }
    }

    async addToColumn(columnHeader, ...values) {
        for (let i = 0; i < values.length; i++)
            await this.sheet.addRow({[columnHeader]: values[i]})
    }

    async addColumns(columns) {
        let rowsToAdd = []
        for (let column in columns) {
            for (let i = 0; i < columns[column].length; i++) {
                if (!rowsToAdd[i]) rowsToAdd[i] = {}
                rowsToAdd[i][column] = columns[column][i]
            }
        }

        for (let i = 0; i < rowsToAdd.length; i++) {
            await this.sheet.addRow(rowsToAdd[i])
        }
    }

    async addToRow(rowIndex, row) {
        for (let column in row) {
            this.sheetRows[rowIndex][column] = row[column]
        }
        try {
            await this.sheetRows[rowIndex].save()
        } catch (e) {
            console.error(e.message)
            sleep(10000)
        }
    }

    findInSheet(item) {
        const result = {
            item: item,
            isFound: false,
            getByHeader: {},
        }
        for (let i = 0; i < this.columns.length; i++)
            if (this.columns[i].includes(item)) {
                result.isFound = true
                result.columnIndex = i
                result.column = this.columns[i]
                result.rowsIndexes = []
                this.columns[i].forEach((value, index) => {
                    if (value === item) result.rowsIndexes.push(index)
                })
                result.rows = this.rows.filter((value, index) => result.rowsIndexes.includes(index))
                for (let j = 0; j < this.headerValues.length; j++) {
                    result.getByHeader[this.headerValues[j]] = []
                    for (let o = 0; o < result.rows.length; o++)
                        result.getByHeader[this.headerValues[j]].push(result.rows[o][j])
                }
                return result
            }
        return result
    }
}