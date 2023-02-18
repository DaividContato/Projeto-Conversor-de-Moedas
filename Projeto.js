const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const Dolar = 5.2
const Euro = 5.7
const Bitcoin =0.0000086

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-Value-Text')
    const currencyValueText = document.getElementById('currency-Value-Dolar')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / Dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-De',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / Euro)
    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais * Bitcoin)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currancyImg = document.getElementById("currency-img")

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currancyImg.src = "./bitcoin.png"
    }

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currancyImg.src = "./EUA.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currancyImg.src = "./euro.png"
    }

    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)
