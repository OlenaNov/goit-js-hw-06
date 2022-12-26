
const inputValue = document.querySelector('#validation-input');

const controlValidation = inputValue.addEventListener('blur', makecontrolValidation);

function makecontrolValidation() {

    if(inputValue.value.length === Number(inputValue.dataset.length)) {
        changeClass("valid", "invalid");

    } else {
        changeClass("invalid", "valid");
    }
};

function changeClass(addClass, removeClass) {
        inputValue.classList.add(addClass);
        inputValue.classList.remove(removeClass);
};

