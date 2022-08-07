const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const nameColor = document.querySelector("span.color");

const backgroundBody = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
  nameColor.textContent = `${color}`;
};

changeColor.addEventListener("click", backgroundBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
