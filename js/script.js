{
    const calculate = (currency, amount) => {

        const eurRate = 4.79;
        const usdRate = 4.32;
        const rubRate = 0.039;

        switch (currency) {
            case "EUR":
                return amount / eurRate;
            case "USD":
                return amount / usdRate;
            case "RUB":
                return amount / rubRate;
        };
    };

    const resetResult = () => {
        resultElement.innerHTML = ("Result:")
    };

    const updateResult = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Result: <strong> ${amount} PLN = ${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const currency = currencyElement.value;
        const amount = +amountElement.value;
        const result = calculate(currency, amount);

        updateResult(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resetButtonElement = document.querySelector(".js-reset");

        resetButtonElement.addEventListener("click", resetResult);
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}