function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

const clothesFromRusToEng = {
    'Кроссовки': 'sneakers',
    'Одежда': 'clothes',
    'Пуховики': 'down-jackets',
    'Футболки': 't-shirts',
    'Аксессуары': 'accessories',
}

function animate(result) {
    let text_calc = $(".text_calc > div")
        .text()
        .replace(/\s/g, "");
    $({numberValue: text_calc}).animate(
        {numberValue: result},
        {
            duration: 1000,
            easing: "linear",
            step: function (val) {
                $(".text_calc > div, .text_calc1 > div span:nth-child(1)")
                    .text(Math.ceil(val).toLocaleString());
            },
        }
    )
}

$(document).ready(function () {
    setTimeout(function () {
        $("[name=value2]").val("Кроссовки");
        $("input[name=value1]").attr('onKeyPress', "if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false")
    }, 3000);

    function calculatePrice() {
        const priceYenInputTag = $("input[name=value1]")
        const clothesInputTag = $("input[name=value2]")

        let priceYen = priceYenInputTag.val()
        let clothes = clothesInputTag.val()
        let result

        if (isNumber(priceYen)) priceYen = Number(priceYen)
        else if (priceYen === '') priceYen = 0
        else priceYen = 'Not-a-Number'

        if (priceYen === 'Not-a-Number' || !(clothes in clothesFromRusToEng)) {
            result = 3690
        } else {
            if (priceYen === 0) result = 0
            else {
                $(".text_calc1 span:last-child").text("₽")
                    .css("text-decoration", "")
                    .css("vertical-align", "")
                const calculatorData = JSON.parse($("#calculator-data").text())
                const yenToRub = calculatorData.yenToRub
                const deliveryPriceYen = calculatorData.deliveryPriceYen
                const insurancePrice = calculatorData.insurancePrice
                const margin = calculatorData.margin
                const commodityCoefficient = calculatorData.commodityCoefficient[clothesFromRusToEng[clothes]]

                const deliveryPriceRub = yenToRub * deliveryPriceYen
                const priceRub = priceYen * yenToRub
                const insurance = Math.ceil(priceRub * (insurancePrice + 2) / 100)
                result = Math.ceil(deliveryPriceRub * commodityCoefficient + priceRub + insurance + margin)
            }
        }

        animate(result)
    }

    // $('.text_calc1 > div span:nth-child(1), .text_calc > div').text(66000);
    setTimeout(function () {
        calculatePrice();
    }, 1000);
    $("#rec487041620").on("input", function () {
        calculatePrice();
    });
});