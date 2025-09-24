const form = document.querySelector('form');
const username = form[0];
const email = form[1];
const quantity = form[2];

console.dir(form);
console.log(username);

username.addEventListener('input', function(event) {
    console.log(event.target.validity);
    
})


email.addEventListener('input', function(event) {
    console.log(event.target.validity);

    if (!email.validity.valid) {
        email.setCustomValidity('Not a valid Email!');

    } else if (email.validity.patternMismatch) {
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
    
    } else {
        // reset any error messages
        email.setCustomValidity('');
    }

    // display the error message
    email.textContent = email.validationMessage
    
});
