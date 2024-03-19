const convertButton = document.querySelector(".button-convert")

function diceConvert() {
    const intupCurrency = document.querySelector(".input-value").value
    const valueConvertion = document.querySelector("#real")
    const valueConvertionDolar = document.querySelector("#dolar")
    const realToday = 0.20
    const dolarToday = 5.03
    const euroToday = 5.44
    const libraToday = 6.36
    const yenToday = 0.034
    const bitcoin = 3
    const valueInput = document.querySelector(".convert-to")
    const imgValue = document.querySelector(".eua")

    valueConvertion.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(intupCurrency)

    if (valueInput.value == "real") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(intupCurrency/realToday)
    }
 
    if (valueInput.value == "dolar") {
        //Se o select estiver selecionado o valor de dolar, entre aqui
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD"
        }).format(intupCurrency/dolarToday) //NÃO PODE DAR ESPAÇO
    }

    if (valueInput.value == "euro") {
        //Se o select estiver selecionado o valor de dolar, entre aqui
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("nl-BE", {
            style: "currency",
            currency: "EUR"
        }).format(intupCurrency/euroToday) //NÃO PODE DAR ESPAÇO
    }

    if (valueInput.value == "libra") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(intupCurrency/libraToday)
    }

    if (valueInput.value == "bitcoin") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(intupCurrency*bitcoin)
    }

    if (valueInput.value == "yen") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(intupCurrency/yenToday)
    }
}

convertButton.addEventListener("click", diceConvert)

const valorInput = document.querySelector(".convert-to")
const nameCurrency = document.querySelector("#usa")
const imgCurrency = document.getElementById("currency")
const valueConvertionDolar = document.getElementById("dolar")


valorInput.addEventListener("change", function () {

    if (valorInput.value == "real") {
        nameCurrency.innerHTML = "Real"
        imgCurrency.src = "./assets/real.png"
        
    }

    if (valorInput.value == "dolar") {
        nameCurrency.innerHTML = "Dólar Americano"
        imgCurrency.src = "./assets/dolar.png"
        
    }

    if (valorInput.value == "euro") {
        nameCurrency.innerHTML = "EURO"
        imgCurrency.src = "./assets/euro.png"

    }

    if (valorInput.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        imgCurrency.src = "./assets/libra.png"

    }

    if (valorInput.value == "bitcoin") {
        nameCurrency.innerHTML = "Bitcoin"
        imgCurrency.src = "./assets/bitcoin.png"

    }

    if (valorInput.value == "yen") {
        nameCurrency.innerHTML = "Yen"
        imgCurrency.src = "./assets/yen.png"

    }
    diceConvert()

})
