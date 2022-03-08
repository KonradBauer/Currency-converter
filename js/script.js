const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");
const resetButtonElement = document.querySelector(".js-reset");

resetButtonElement.addEventListener("click", () => {
    resultElement.innerHTML = ("Result:")
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result = resultElement;
    const currency = currencyElement.value;
    const eurRate = 4.79;
    const usdRate = 4.32;
    const rubRate = 0.039;
    const amount = +amountElement.value;

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