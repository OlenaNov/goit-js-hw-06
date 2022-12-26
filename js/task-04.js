
const soanResult = document.querySelector('#value');
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

let counterValue = 0;

buttonPlus.addEventListener('click', onPlus);
buttonMinus.addEventListener('click', onMinus);

function onPlus() {
    soanResult.textContent = counterValue += 1;
};

function onMinus() {
    soanResult.textContent = counterValue -= 1;
};
