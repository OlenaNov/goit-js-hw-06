
const inputFontSizeControl = document.querySelector('#font-size-control');
const textFontSizeControl = document.querySelector('#text');

function makeSize() {
    const valueSize = Number(inputFontSizeControl.value);
    textFontSizeControl.style.fontSize = `${valueSize}px`;
};

const makeInputFontSize = inputFontSizeControl.addEventListener('input', makeSize);
