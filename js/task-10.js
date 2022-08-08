const numbers = document.querySelector("#controls>input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxElements = document.querySelector("#boxes");
let size = 30;
const createElements = (event) => {
  createBoxes(numbers.value);
};

const destroyElements = (event) => {
  destroyBoxes();
};

function createBoxes(amount) {
  let newElement = "";

  for (let i = 1; i <= amount; i++) {
    newElement = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px; margin-top: 3px"></div>`;
    boxElements.insertAdjacentHTML("beforeend", newElement);
    size += 10;
  }
}

function destroyBoxes() {
  boxElements.innerHTML = "";
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

create.addEventListener("click", createElements);
destroy.addEventListener("click", destroyElements);
