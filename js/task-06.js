const textInput = document.querySelector("#validation-input");
const xz = document.querySelector("[data-length]");

const verification = (event) => {
  event.currentTarget.classList.add("invalid");
  event.currentTarget.classList.contains("valid")
    ? event.currentTarget.classList.remove("valid")
    : "";
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
};

textInput.addEventListener("blur", verification);
