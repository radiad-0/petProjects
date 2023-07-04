import {doc} from "./googleSpreadsheets/googleSpreadsheets.js";

function getMessageFromBuffer(buffer) {
    let message = ''
    if (buffer.length) buffer.forEach(value => {message += `${value}`})
    return message
}

export async function getTrackInfoHTML(track) {
    const sheets = await doc.sheets()
    let buffer = []

    const statuses = sheets.sheets[1].getColumnByHeader['Возможные статусы']
    let status

    const searchResults = sheets.findInSheets(track)

    if (searchResults.countOfSheetsFound && track) {
        buffer.push('<table>')
        buffer.push(`<caption id="track">${track}</caption>`)
        const flight = searchResults.getByHeader['Номер рейса'][0]
        const statusSearchResults = sheets.findInSheets(flight)
        if (statusSearchResults.countOfSheetsFound && flight !== undefined && statusSearchResults.getByHeader['Статус'] !== undefined) status = statusSearchResults.getByHeader['Статус'][0]
        else status = statuses[0]

        let statusFlag = true
        for (let i = 0; i < statuses.length; i++) {
            if (statusFlag)
                buffer.push(`<tr><td class="tracking-info-row"><img class="tracking-image" src="images/tracking/${i + 1}_1.png"></td><td>${statuses[i]}</td></tr>`)
            else
                buffer.push(`<tr><td class="tracking-info-row"><img class="tracking-image" src="images/tracking/${i + 1}_0.png"></td><td>${statuses[i]}</td></tr>`)

            if (statuses[i] === status) statusFlag = false
        }
        buffer.push('</table>')
    } else {
        buffer.push('<div id="track-not-found-div">')
        buffer.push('<img src="images/tracking/trackNotFound.png">')
        buffer.push(`<p>Информация о статусе посылки ${track.toUpperCase()} отсутствует</p>`)
        buffer.push('</div>')
    }
    return getMessageFromBuffer(buffer)
}