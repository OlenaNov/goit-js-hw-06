
const controlsBoxEl = document.querySelector('#controls');
const inputNumber = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');


buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);


function createBoxes() {
  const amount = inputNumber.value;
  let size = 0;
  for(let i = 0; i <= amount - 1; i += 1) {

    size = 30 + (i * 10);

    const newElement = document.createElement("div");
    newElement.style.width = size + 'px';
    newElement.style.height = size + 'px';
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.classList = 'element';

    boxesEl.append(newElement);
  }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function destroyBoxes() {
  const elementsPerRemove = document.querySelectorAll('.element');
  elementsPerRemove.forEach((element) => element.remove());
  inputNumber.value = "";
};
