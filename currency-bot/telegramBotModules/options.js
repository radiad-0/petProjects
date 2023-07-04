export const showMainMenuOptions = {
    reply_markup: {
        keyboard: [
            [{text: 'Купить юани 💱'}],
            [{text: 'Поддержка 🤳'}],
            [{text: 'Узнать курс юаня 💹'}],
        ]
    },
    resize_keyboard: true,
    disable_web_page_preview: true,
    parse_mode: 'Markdown',
}

export const chooseCashAccountOptions = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Alipay🔹', callback_data: 'alipayButton'}],
            [{text: 'Другое', callback_data: 'anotherButton'}],
        ]
    },
    resize_keyboard: true,
    disable_web_page_preview: true,
}

export const chooseReadyOrCancelOptions = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Я оплатил ✅', callback_data: 'readyButton'}],
            [{text: 'Отмена ❌', callback_data: 'cancelButton'}],
        ]
    },
    resize_keyboard: true,
    disable_web_page_preview: true,
    parse_mode: 'HTML',
}

export const chooseYesOrNoOptions = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'ДА ✅', callback_data: 'YESButton'}],
            [{text: 'НЕТ ❌', callback_data: 'NOButton'}],
        ]
    },
}

export const removeKeyboardOptions = {
    reply_markup: {
        remove_keyboard: true
    }
}

export const finalConfirmOptions = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Подтвердить', callback_data: 'finalConfirmButton'}],
        ]
    }
}