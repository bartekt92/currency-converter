{
    const result = document.querySelector(".js-result");
    const amount = document.querySelector(".js-amount");
    let firstCurrency = document.querySelector(".js-currency");
    let secondCurrency = document.querySelector(".js-currency2");
    const rateElement = document.querySelector(".js-rate");
    let enteredRate = 0;
    let rate = rateElement.value;
    const infoAlert = document.querySelector(".js-infoAlert");

    const welcome = () => {
        console.log("Witajcie programiści!");
    }
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
    const checkInputs = () => {
        firstCurrency.addEventListener("input", () => {
            enteredRate = 0;
            rateElement.value = "";
            checkCurrency(firstCurrency, secondCurrency);
        })
        secondCurrency.addEventListener("input", () => {
            checkCurrency(secondCurrency, firstCurrency);
        })

        rateElement.addEventListener("input", () => {
            enteredRate = 1;
            checkRate(firstCurrency, rateElement);
            logResult(rate, firstCurrency, secondCurrency, rateElement);
        });
        const form = document.querySelectorAll(".js-label");
        form.forEach(element => {
            element.addEventListener("input", () => {

                alert.innerText = "";
                checkRate(firstCurrency, rateElement);
                logResult(rate, firstCurrency, secondCurrency, rateElement);
            });
        })
    };
    const checkCurrency = (firstCurrency, secondCurrency) => {
        const alert = document.querySelector(".js-alert");
        alert.innerText = "";
        if (firstCurrency.value === secondCurrency.value) {
            secondCurrency.value = firstCurrency.value === "zł" ? "€" : "zł"
            firstCurrency.value === "$" ? alert.innerText = `Chciałeś zamienić Dolary na Dolary??? Masz ten amerykanski feeling i vibe 😆` : alert.innerText = "";
        }
    };
    const checkRate = (firstCurrency, rateElement) => {
        switch (firstCurrency.value) {
            case "zł":
                if (secondCurrency.value === "$") {
                    return rate = (enteredRate === 1) ? rateElement.value : 0.26;
                }
                return rate = (enteredRate === 1) ? rateElement.value : 0.22;
            case "€":
                if (secondCurrency.value === "$") {
                    return rate = (enteredRate === 1) ? rateElement.value : 1.21;
                }
                return rate = (enteredRate === 1) ? rateElement.value : 4.56;
            case "$":

                if (secondCurrency.value === "€") {
                    return rate = (enteredRate === 1) ? rateElement.value : 0.83;
                }
                return rate = (enteredRate === 1) ? rateElement.value : 3.78;
        }
    };
    const calculateResult = () => {
        let r = (amount.value) * rate;
        return result.value = r.toFixed(2);
    };
    const logResult = (rate, firstCurrency, secondCurrency, rateElement) => {
        const firstValueLabel = document.querySelector(".js-value1");
        const secondValueLabel = document.querySelector(".js-value2");
        rateElement.placeholder = rate;
        calculateResult();
        firstValueLabel.innerText = firstCurrency.value;
        secondValueLabel.innerText = secondCurrency.value;
        infoAlert.innerHTML = `<strong class="form__strong"> ${amount.value} ${firstCurrency.value} </strong>to w przeliczeniu: <strong class="form__strong"> ${result.value} ${secondCurrency.value} </strong>`;
    };
    const init = () => {
        welcome();
        const button = document.querySelector(".js-button");
        button.addEventListener("click", changeRatesOnClick);
        checkInputs();
        result.value = 4.56
        infoAlert.innerHTML = `<strong class="form__strong"> 1 € </strong>to w przeliczeniu: <strong class="form__strong"> 4.56 zł </strong>`;
    };
    init();
}