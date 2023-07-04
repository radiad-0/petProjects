import {doc} from "../tools/googleSpreadsheets/googleSpreadsheets.js";

export const chatbotManagement = {
    async initState(userData) {
        const chatId = userData.from.id

        if (chatbotManagement[chatId] === undefined) {
            // сохранение chatId
            const chatsSheet = await doc.sheetCurrencyChatId()
            await chatsSheet.addColumns({
                Username: [userData.from.username],
                ChatID: [chatId],
            })

            chatbotManagement[chatId] = {
                command: 'textCommand',
                buffer: {}
            }
        }
    },
    clearBuffer(chatId) {
        chatbotManagement[chatId].buffer = {
            alipay: false,
            another: false,
            accountDetails: undefined,
            accountUserName: undefined,
            priceYen: undefined,
            priceRub: undefined,
            priceRubAlmaz: undefined,
            screenshotId: undefined,
            courseForPeople: undefined,
            courseAlmaz: undefined
        }
    },
    get currentTime() {
        return (new Date()).toLocaleString()
    }
}

// const almazChatId = 720361110
const almazChatId = 500614117

// const chinaChelChatId = 720361110
// const chinaChelChatId = 500614117
// const chinaChelChatId = 123
const chinaChelChatId = 2139370083

chatbotManagement[almazChatId] = {
    chatId: almazChatId,
    command: 'textCommand',
    buffer: {},
    courseForPeople: 999,
    courseAlmaz: 1,
}
chatbotManagement.almaz = chatbotManagement[almazChatId]

chatbotManagement[chinaChelChatId] = {
    chatId: chinaChelChatId,
    command: 'textCommand',
    buffer: {},
    courseForPeople: 999,
    courseAlmaz: 1,
    currentOrderData: {},
    messageIds: []
}
chatbotManagement.chinaChel = chatbotManagement[chinaChelChatId]