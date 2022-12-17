
const inputValidation = document.querySelector('#validation-input');

console.dir(inputValidation.value)

const makecontrolValidation = () => {
    if(inputValidation.value.length >= 6) {
        console.log("Ok")
    }
};

const controlValidation = inputValidation.addEventListener('blur', makecontrolValidation);
