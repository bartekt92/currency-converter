console.log("Witajcie programiści!")
let amount = document.querySelector(".js-amount");
let currency = document.querySelector(".js-currency");
let currency2 = document.querySelector(".js-currency2");
let rate = document.querySelector(".js-rate");
let result = document.querySelector(".js-result");
let form = document.querySelector(".js-form");
let value1 = document.querySelector(".js-value1");
let value2 = document.querySelector(".js-value2");
let alert = document.querySelector(".js-alert");
let infoAlert = document.querySelector(".js-infoAlert");
let button = document.querySelector(".js-button");
let x = 0;
let kurs = rate.value;
let a;
let r = (amount.value) * 4.56;
result.value = r
infoAlert.innerHTML = `<strong class="form__strong"> ${amount.value} ${currency.value} </strong>to w przeliczeniu: <strong class="form__strong"> ${result.value} ${currency2.value} </strong>`;

button.addEventListener("click", () => {
    a = currency.value;
    currency.value = currency2.value
    currency2.value = a;
});

form.addEventListener("input", () => {
    rate.addEventListener("input", () => {
        x = 1;
    });
    currency.addEventListener("input", () => {
        x = 0;
    });
    currency.addEventListener("input", () => {
        rate.value = ""
    });
    alert.innerText = "";
    switch (currency.value) {
        case "zł":
            kurs = (x === 1) ? rate.value : 0.22;
            if (currency.value === currency2.value) {
                currency2.value = "€";
            } else if (currency2.value === "$") {
                kurs = (x === 1) ? rate.value : 0.26;
            }
            break;
        case "€":
            kurs = (x === 1) ? rate.value : 4.56;
            if (currency.value === currency2.value) {
                currency2.value = "zł";
            } else if (currency2.value === "$") {
                kurs = (x === 1) ? rate.value : 1.21;
            }
            break;
        case "$":
            kurs = (x === 1) ? rate.value : 3.78;
            if (currency.value === currency2.value) {
                currency2.value = "zł";
                alert.innerText = `Chciałeś zamienić Dolary na Dolary??? Masz ten amerykanski feeling i vibe 😆`;
            } else if (currency2.value === "€") {
                kurs = (x === 1) ? rate.value : 0.83;
            }
            break;
    }
    rate.placeholder = kurs;
    console.log(x);
    r = (amount.value) * kurs;
    result.value = r.toFixed(2);
    value1.innerText = currency.value;
    value2.innerText = currency2.value;
    infoAlert.innerHTML = `<strong class="form__strong"> ${amount.value} ${currency.value} </strong>to w przeliczeniu: <strong class="form__strong"> ${result.value} ${currency2.value} </strong>`;
});

