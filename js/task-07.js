const inputSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

inputSize.addEventListener("input", fontSize);
