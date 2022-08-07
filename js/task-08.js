const loginForm = document.querySelector(".login-form");

const submitForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const newEntry = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(newEntry);
    event.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", submitForm);
