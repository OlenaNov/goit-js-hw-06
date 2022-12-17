
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const makeName = () => {
if(inputName.value) {
    outputName.textContent = inputName.value;
} else {
    outputName.textContent = 'Anonymous';
}};

const messageName = inputName.addEventListener('input', makeName);