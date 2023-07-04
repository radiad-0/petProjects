import {
    addAlipayToBuffer,
    addAnotherToBuffer,
    createExecuteMultipleFunctionsFunction,
    createSendMessageAndSetNexCommandFunction
} from "./processingTools.js";
import {processingTextCommands} from "./processingTextCommands.js";

const buttons = {
    alipayButton: createExecuteMultipleFunctionsFunction(
        addAlipayToBuffer,
        createSendMessageAndSetNexCommandFunction('Введите номер телефона, который привязан ' +
            'к вашему аккаунту Alipay:', 'userNameDetails')
    ),

    anotherButton: createExecuteMultipleFunctionsFunction(
        addAnotherToBuffer,
        createSendMessageAndSetNexCommandFunction('Укажите куда перевести юани (¥).\n\n' +
            'Пример: WeChat payment, +7 (777) 777-77-77', 'userNameDetails')
    ),

    readyButton: createSendMessageAndSetNexCommandFunction('Отправьте скриншот перевода:',
        'validateScreenshot'),

    cancelButton: createSendMessageAndSetNexCommandFunction('Жаль, обращайтесь еще',
        'textCommand'),

    YESButton: createSendMessageAndSetNexCommandFunction('Курс (¥ -> ₽, Для Русского Клиента)',
        'courseForPeople'),

    NOButton: createSendMessageAndSetNexCommandFunction('Очень жаль, приходите еще',
        'start'),
}

export async function processingButton(query) {
    if (query.data in buttons) await buttons[query.data](query)
    else await processingTextCommands(query)
}