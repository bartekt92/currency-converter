{
const init = () => {
    const infoAlert = document.querySelector(".js-infoAlert");
    const result = document.querySelector(".js-result");
    console.log("Witajcie programiści!");
    result.value = 4.56
    infoAlert.innerHTML = `<strong class="form__strong"> 1 € </strong>to w przeliczeniu: <strong class="form__strong"> 4.56 zł </strong>`;
};
init();

const result = document.querySelector(".js-result");
const amount = document.querySelector(".js-amount");
let firstCurrency = document.querySelector(".js-currency");
let secondCurrency = document.querySelector(".js-currency2");
const rateElement = document.querySelector(".js-rate");
const form = document.querySelectorAll(".js-label");
const button = document.querySelector(".js-button");
let enteredRate = 0;
let rate = rateElement.value;
/*
function rateValueReset(){
    enteredRate = 0;
    rateElement.value = "";
}   */
const changeRatesOnClick = () => {
    alert.innerText = "";
    let substituteCurrency = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = substituteCurrency;
    enteredRate = 0;
    rateElement.value = "";
    checkRate(firstCurrency, rateElement);
    logResult(rate, firstCurrency, secondCurrency, rateElement);
};
button.addEventListener("click", changeRatesOnClick);

function checkCurrency(firstCurrency, secondCurrency) {
    const alert = document.querySelector(".js-alert");
    alert.innerText = "";
    if (firstCurrency.value === secondCurrency.value) {
        switch (firstCurrency.value) {
            case "zł": secondCurrency.value = "€";
                break;
            case "€": secondCurrency.value = "zł";
                break;
            case "$": secondCurrency.value = "zł";
                alert.innerText = `Chciałeś zamienić Dolary na Dolary??? Masz ten amerykanski feeling i vibe 😆`;
                break;
        }
    }
};
function checkCurrency2(firstCurrency, secondCurrency) {
    const alert = document.querySelector(".js-alert");
    alert.innerText = "";
    if (firstCurrency.value === secondCurrency.value) {
        switch (secondCurrency.value) {
            case "zł": firstCurrency.value = "€";
                break;
            case "€": firstCurrencyvalue = "zł";
                break;
            case "$": firstCurrency.value = "zł";
                alert.innerText = `Chciałeś zamienić Dolary na Dolary??? Masz ten amerykanski feeling i vibe 😆`;
                break;
        }
    }
};
function checkRate(firstCurrency, rateElement) {
    switch (firstCurrency.value) {
        case "zł":
            if (secondCurrency.value === "$") {
                return rate = (enteredRate === 1) ? rateElement.value : 0.26;
            } else {
                return rate = (enteredRate === 1) ? rateElement.value : 0.22;
            }
        case "€":

            if (secondCurrency.value === "$") {
                return rate = (enteredRate === 1) ? rateElement.value : 1.21;
            } else {
                return rate = (enteredRate === 1) ? rateElement.value : 4.56;
            }

        case "$":

            if (secondCurrency.value === "€") {
                return rate = (enteredRate === 1) ? rateElement.value : 0.83;
            }
            else {
                return rate = (enteredRate === 1) ? rateElement.value : 3.78;
            }
    }
};
function calculateResult() {
    r = (amount.value) * rate;
    return result.value = r.toFixed(2);
};
function logResult(rate, firstCurrency, secondCurrency, rateElement) {
    const result = document.querySelector(".js-result");
    const value1 = document.querySelector(".js-value1");
    const value2 = document.querySelector(".js-value2");
    const infoAlert = document.querySelector(".js-infoAlert");
    rateElement.placeholder = rate;
    calculateResult();
    value1.innerText = firstCurrency.value;
    value2.innerText = secondCurrency.value;
    infoAlert.innerHTML = `<strong class="form__strong"> ${amount.value} ${firstCurrency.value} </strong>to w przeliczeniu: <strong class="form__strong"> ${result.value} ${secondCurrency.value} </strong>`;
};

function listenInputAndDo(){
    firstCurrency.addEventListener("input", () => {
    enteredRate = 0;
    rateElement.value = "";
    checkCurrency(firstCurrency, secondCurrency);
})
secondCurrency.addEventListener("input", () => {
    checkCurrency2(firstCurrency, secondCurrency);
})

rateElement.addEventListener("input", () => {
    enteredRate = 1;
    checkRate(firstCurrency, rateElement);
    logResult(rate, firstCurrency, secondCurrency, rateElement);
});
form.forEach(element => {
    element.addEventListener("input", () => {

        alert.innerText = "";
        checkRate(firstCurrency, rateElement);
        logResult(rate, firstCurrency, secondCurrency, rateElement);
    });
})
};
listenInputAndDo();
}