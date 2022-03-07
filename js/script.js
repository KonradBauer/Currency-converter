let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let resetButtonElement = document.querySelector(".js-reset");

resetButtonElement.addEventListener("click", () => {
    resultElement.innerHTML = ("Result:")
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result = resultElement;
    let currency = currencyElement.value;
    let eurRate = 4.79;
    let usdRate = 4.32;
    let rubRate = 0.039;
    let amount = +amountElement.value;

    switch (currency) {
        case "EUR":
            result = amount / eurRate;
            break;
        case "USD":
            result = amount / usdRate;
            break;
        case "RUB":
            result = amount / rubRate;
            break;
    };

    resultElement.innerHTML = `Result: <strong> ${amount} PLN = ${result.toFixed(2)} ${currency}</strong>`;
});