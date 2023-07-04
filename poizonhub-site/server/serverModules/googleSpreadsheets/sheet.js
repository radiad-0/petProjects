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