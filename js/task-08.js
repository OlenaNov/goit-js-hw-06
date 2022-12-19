
const loginFormEl = document.querySelector('.login-form');
const buttonSubmitEl = document.querySelector('button');
const inputEmailEl = document.querySelector("input[name='email']");
const inputPasswordEl = document.querySelector("input[name='password']");

// const arrLoginFormElements = {};

buttonSubmitEl.addEventListener('click', onLoginForm);

function onLoginForm() {
    loginFormEl.addEventListener('submit', onStopUpdate);
};


function onStopUpdate(evt) {
    evt.preventDefault();

    if(!(inputEmailEl.value) && !(inputPasswordEl.value)) {

        alert('Form must be completed!');

    } else {

        const loginFormElements = evt.currentTarget;
        const arrLoginFormElements = {
            email: loginFormElements.email.value,
            password: loginFormElements.email.value,
        };
        console.log(arrLoginFormElements);

        loginFormEl.reset();
    };

};

