import { Sheet } from "./sheet.js";

export class Sheets {
    constructor(doc) {
        this.sheets = []
        this.getColumnByHeader = {}
        for (let i = 0; i < doc.sheetCount; i++)
            this.sheets.push(new Sheet(doc.sheetsByIndex[i]))
    }

    async load() {
        for (let i = 0; i < this.sheets.length; i++) {
            await this.sheets[i].load()
            Object.assign(this.getColumnByHeader, this.sheets[i].getColumnByHeader)
        }
    }

    findInSheets(item) {
        const results = {
            item: item,
            countOfSheetsFound: 0,
            getByHeader: {},
            data: [],
        }
        for (let i = 0; i < this.sheets.length; i++) {
            const result = this.sheets[i].findInSheet(item)
            if (result.isFound) {
                results.countOfSheetsFound++
                results.data.push(result)
                for (const header in result.getByHeader)
                    results.getByHeader[header] = result.getByHeader[header]
            }
        }
        return results
    }
}