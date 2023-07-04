$(document).ready(function () {
    setTimeout(function () {
        $("[name=value2]").val("Кроссовки");
        $("[name=value3]").val("Российский рубль");
        $("[name=value4]").val("Пленка + Пакет");
    }, 3000);

    function text_calc_one() {
        var v1 = Number($("[name=value1]").val());

        if ($("[name=value2]").val() == "Одежда") {
            var v2 = 135;
        } else if ($("[name=value2]").val() == "Кроссовки") {
            var v2 = 195;
        }

        if ($("[name=value3]").val() == "Российский рубль") {
            var v3 = 12.5;
            $(".text_calc1 span:last-child")
                .text("₽")
                .css("text-decoration", "")
                .css("vertical-align", "");
        } else if (
            $("[name=value3]").val() == "Белорусский рубль"
        ) {
            var v3 = 0.6;
            $(".text_calc1 span:last-child")
                .text("Br")
                .css("text-decoration", "")
                .css("vertical-align", "");
        } else if (
            $("[name=value3]").val() == "Казахстанский Тенге"
        ) {
            var v3 = 72;
            $(".text_calc1 span:last-child")
                .text("₸")
                .css("text-decoration", "")
                .css("vertical-align", "");
        } else if ($("[name=value3]").val() == "Киргизский сом") {
            var v3 = 15;
            $(".text_calc1 span:last-child")
                .text("C")
                .css("border-bottom", "10px solid")
                .css("vertical-align", "14px");
        }

        if ($("[name=value4]").val() == "Пленка + Пакет") {
            var v4 = 12;
        } else if ($("[name=value4]").val() == "Коробка") {
            var v4 = 30;
        }

        if (
            $("[name=value1]").val() == "" ||
            $("[name=value1]").val() == "0"
        ) {
            var Text_calcV = 0;
        } else {
            var Text_calcV = (v1 + 10 + 25 + 75 + v2 + v4) * v3;
        }

        let text_calc = $(".text_calc > div")
            .text()
            .replace(/\s/g, "");
        $({numberValue: text_calc}).animate(
            {numberValue: Text_calcV},
            {
                duration: 1000,
                easing: "linear",
                step: function (val) {
                    $(
                        ".text_calc > div, .text_calc1 > div span:nth-child(1)"
                    ).text(Math.round(val).toLocaleString());
                },
            }
        );
    }

    // $('.text_calc1 > div span:nth-child(1), .text_calc > div').text(66000);
    setTimeout(function () {
        text_calc_one();
    }, 1000);
    $("#rec487041620").on("input", function () {
        text_calc_one();
    });
});