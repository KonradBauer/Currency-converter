let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let resetButton = document.querySelector(".js-reset");

resetButton.addEventListener("click", () => {
    resultElement.innerHTML = ("Result:<strong> N/A</strong>")
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result = resultElement;
    let currency = currencyElement.value;
    let eurRate = 4.79;
    let usdRate = 4.32;
    let amount = +amountElement.value;

    switch (currency) {
        case "EUR":
            result = amount / eurRate;
            break;
        case "USD":
            result = amount / usdRate;
            break;
    };

    resultElement.innerHTML = `Result: <strong>${result.toFixed(2)} ${currency}</strong>`;
});