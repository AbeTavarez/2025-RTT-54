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
    
    console.log(email.validity.valid);
    
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Not a valid Email!');
        
    } else if (email.validity.patternMismatch) {
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
        
    } else {
        // reset any error messages
        email.setCustomValidity('');
    }
    
    
    // display the error message
    email.textContent = email.validationMessage;
    // console.log(email.textContent);

    console.log(event.target.value);
    
    console.log(event.target.validity);
    
});


/**
 * Handles the submit form event
 */
form.addEventListener('submit', function(event) {
    event.preventDefault(); // <--- always call this first
    
    const data = {
        username: username.value,
        email: email.value,
        quantity: quantity.value
    }

    console.log(`Sending data to backend...`, data);
    form.reset(); 
    
})
