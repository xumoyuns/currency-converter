let elForm = document.querySelector(".form");
let elFromInput = document.querySelector(".form__input");
let elFormSelect = document.querySelector(".form-select");
let elResult = document.querySelector(".form__result");

const oneUsd = 10815.0;
const oneEuro = 12230.91;
const onePound = 14487.99;
const oneRubl = 146.81;
const oneYuan = 1698.44;
const oneDinor = 35742.8;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elFormSelect.value === "usd") {
    let valuteToSum = elFromInput.value * oneUsd;
    elResult.textContent = valuteToSum.toFixed(2);
  } else if (elFormSelect.value === "Euro") {
    let valuteToSum = elFromInput.value * oneEuro;
    elResult.textContent = valuteToSum.toFixed(2);
  } else if (elFormSelect.value === "Rubl") {
    let valuteToSum = elFromInput.value * oneRubl;
    elResult.textContent = valuteToSum.toFixed(2);
  } else if (elFormSelect.value === "Yuan") {
    let valuteToSum = elFromInput.value * oneYuan;
    elResult.textContent = valuteToSum.toFixed(2);
  } else if (elFormSelect.value === "Dinor") {
    let valuteToSum = elFromInput.value * oneDinor;
    elResult.textContent = valuteToSum.toFixed(2);
  } else if (elFormSelect.value === "Pound") {
    let valuteToSum = elFromInput.value * onePound;
    elResult.textContent = valuteToSum.toFixed(2);
  }
});
