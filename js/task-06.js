
const inputValidation = document.querySelector('#validation-input');
const dataLength = document.querySelector('input[data-length="6"]');
const styleValidationInput = document.querySelector('style');


const makecontrolValidation = () => {
    if(Number(inputValidation.value.length) >= Number(dataLength.dataset.length)) {
        inputValidation.classList.add("valid");
        inputValidation.classList.remove("invalid");
    } else {
        inputValidation.classList.add("invalid");
        inputValidation.classList.remove("valid");
    }
};

const controlValidation = inputValidation.addEventListener('blur', makecontrolValidation);
