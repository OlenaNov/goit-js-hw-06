
const bodyEl = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color'); 
const colorText = document.querySelector('.color');

buttonChangeColor.addEventListener('click', onChangeColorButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function onChangeColorButton() {
  const newColor = getRandomHexColor();
  bodyEl.style.color = newColor;
  colorText.textContent = newColor;
};
