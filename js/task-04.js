const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const counter = document.querySelector("#value");

let counterValue = 0;

const addition = (event) => {
  counter.innerHTML = `${(counterValue -= 1)}`;
};

const subtraction = (event) => {
  counter.innerHTML = `${(counterValue += 1)}`;
};

decrement.addEventListener("click", addition);
increment.addEventListener("click", subtraction);
