
const counterValue = document.querySelector('#value');
const buttonPlus = document.querySelector('[data-action="decrement"]');
const buttonMinus = document.querySelector('[data-action="increment"]');


counterValue.textContent = '0';

const onPlus = value => {
    Number(value.textContent) += 1;
    console.log(value.textContent);
}


const onMinus = value => {
    Number(value.textContent) -= 1;
    console.log(value.textContent);
}
buttonPlus.addEventListener('click', onPlus(counterValue));
buttonMinus.addEventListener('click', onMinus(counterValue));




console.log(counterValue);

