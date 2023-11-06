const input = document.querySelector("input");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit-button");
const dismissButton = document.querySelector(".dismiss-button");

const signUpCard = document.querySelector(".sign-up-card");
const succesCard = document.querySelector(".success-card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    errorMessage.textContent = "This field is required";
    input.classList.add("error-style");
  } else {
    signUpCard.classList.add("none");
    succesCard.classList.remove("none");
  }
});

dismissButton.addEventListener("click", function () {
  input.value = "";
  succesCard.classList.add("none");
  signUpCard.classList.remove("none");
});
