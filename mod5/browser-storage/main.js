// Select all necessary DOM elements
const form = document.getElementById("registrationForm");
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


// Load saved username: Check for username in local storage
document.addEventListener("DOMContentLoaded", function () {
  const usernameFromLocalStorage = localStorage.getItem("username");

  if (usernameFromLocalStorage) {
    userNameInput.value = usernameFromLocalStorage;
  }
});


// Real-time validation
userNameInput.addEventListener("input", function (event) {
  
    // check validity using Constrain Validation API
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity("Please add an username with at least 3 characters");
  } else {
    userNameInput.setCustomValidity('');
  }

  usernameError.textContent = userNameInput.validationMessage;
});






// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // check validity using Constrain Validation API
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity("Please fill out this field");
  }

  usernameError.textContent = userNameInput.validationMessage;

  localStorage.setItem('username', userNameInput.value);
  alert("Form submitted!");
});
