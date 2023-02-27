// Selectors
const firstName = document.querySelector("#form--firstname");
const lastName = document.querySelector("#form--lastname");
const email = document.querySelector("#form--email");
const password = document.querySelector("#form--password");
const form = document.querySelector(".main__form");

let inputs = [firstName, lastName, password];

// RegEx
function validEmail(e) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(e);
}

// Function
function validation(input) {
  if (input.value.length == "") {
    input.nextElementSibling.style.opacity = "1";
    input.parentElement.classList.add("errors");
    input.parentElement.nextElementSibling.classList.add("show");
  } else {
    input.nextElementSibling.style.opacity = "0";
    input.parentElement.classList.remove("errors");
    input.parentElement.nextElementSibling.classList.remove("show");
  }
}

function emailValidation() {
  if (validEmail(email.value)) {
    email.style.color = "hsl(249, 10%, 26%)";
    email.nextElementSibling.style.opacity = "0";
    email.parentElement.classList.remove("errors");
    email.parentElement.nextElementSibling.classList.remove("show");
  } else {
    email.style.color = "hsl(0, 100%, 74%)";
    email.nextElementSibling.style.opacity = "1";
    email.parentElement.classList.add("errors");
    email.parentElement.nextElementSibling.classList.add("show");
  }
}

// Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation(firstName);
  validation(lastName);
  emailValidation();
  validation(password);
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validation(input);
  });
});

email.addEventListener("input", () => {
  emailValidation();
});
