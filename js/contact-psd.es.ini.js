import "./main-psd.es.async.js";
const modal = document.querySelector("#successModal");
const closeButton = document.querySelector(".modal__close-btn");
document.querySelector(".form__cta-link");
const form = document.querySelector(".form--main");
const fullName = document.querySelector("#name-form");
const email = document.querySelector("#email-form");
const phone = document.querySelector("#phone-form");
const formInput = document.querySelectorAll(".form__input");
const formInputRequired = document.querySelectorAll(".form__input--required");
formInput.forEach((input) => {
  input.value = "";
});
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let isValid = true;
  const fullNameRegex = /^[\sA-Za-z]+$/;
  if (fullNameRegex.test(fullName.value)) {
    document.querySelector("#fullNameError").textContent = "";
  } else {
    document.querySelector("#fullNameError").textContent = "Please enter a valid full name";
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value)) {
    document.querySelector("#emailError").textContent = "";
  } else {
    document.querySelector("#emailError").textContent = "Please enter a valid email address";
    isValid = false;
  }
  const phoneRegex = /^\d{10}$/;
  if (phoneRegex.test(phone.value)) {
    document.querySelector("#phoneError").textContent = "";
    console.log("nAa");
  } else {
    document.querySelector("#phoneError").textContent = "Please enter a valid phone number (10 digits)";
    isValid = false;
  }
  formInputRequired.forEach((input) => {
    if (input.value.trim() === "") {
      document.querySelectorAll(".error").forEach((errorText) => {
        errorText.textContent = "This field is required";
      });
      isValid = false;
    }
  });
  if (!isValid) {
    event.preventDefault();
  }
  if (isValid) {
    modal.classList.add("active__modal");
    formInput.forEach((input) => {
      input.value = "";
    });
  }
});
closeButton.addEventListener("click", function() {
  modal.classList.remove("active__modal");
});
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("active__modal");
  }
});
modal.classList.remove("active__modal");
