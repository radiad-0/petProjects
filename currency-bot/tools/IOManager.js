import path from 'path'
import { fileURLToPath } from 'url'
import fs from "fs"

export function readFileRelativeToPoizonhub(filePathRelativeToPoizonhub) {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    return fs.readFileSync(path.join(__dirname, '../../', filePathRelativeToPoizonhub), 'utf8')
}

export function writeFileRelativeToPoizonhub(filePathRelativeToPoizonhub, data = 'test test test 123', errMessage = 'произошла ошибка при записи данных в файл') {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    return fs.writeFile(path.join(__dirname, '../../', filePathRelativeToPoizonhub), data, (err) => {
        if (err) console.error(errMessage)
    })
}