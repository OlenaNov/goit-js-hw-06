
const counterValue = document.querySelector('#value');
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

counterValue.textContent = '0';

const onPlus = () => 
    counterValue.textContent = Number(counterValue.textContent) + 1;

const onMinus = () => 
    counterValue.textContent = Number(counterValue.textContent) - 1;


buttonPlus.addEventListener('click', onPlus);
buttonMinus.addEventListener('click', onMinus);


