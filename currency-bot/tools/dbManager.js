import {readFileRelativeToPoizonhub, writeFileRelativeToPoizonhub} from "./IOManager.js";

export const dbManager = {
    get data() {
        return JSON.parse(readFileRelativeToPoizonhub('currency-bot/orderData.json'))
    },
    set data(data) {
        writeFileRelativeToPoizonhub('currency-bot/orderData.json', JSON.stringify(data), 'не удалось записать данные клиентов в файл')
    },
    // createNewOrderNumber: function (userChatId) {
    //     const data = this.data
    //     let newOrderNumber = data.lastOrderNumber + 1
    //     data.lastOrderNumber = newOrderNumber
    //     if (userChatId in data) {
    //
    //     }
    //     else {
    //         data[userChatId] = {
    //             orderNumbers: [newOrderNumber]
    //         }
    //     }
    //     return newOrderNumber
    // }
}

// {
//     userChatId: {
//         orderNumbers: [],
//         order: {},
//         order: {},
//         order: {},
//     }
// }