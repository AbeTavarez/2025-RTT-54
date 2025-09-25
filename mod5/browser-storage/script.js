// Local Storage
console.log(localStorage);
console.log(localStorage.length)

// set an new item

localStorage.setItem('username', "abe");
localStorage.setItem('location', 'US');
// localStorage.setItem('username', "ABE");

// Get an item
const username = localStorage.getItem('username')
console.log(username);

const userLocation = localStorage.getItem('location');
console.log(userLocation);

// if the key is not found it return null
const userEmail = localStorage.getItem('email');
console.log(userEmail);

if (userEmail !== null) {
    console.log('We got your email info!');
} else {
    localStorage.setItem('email', 'abe@test.com')
}

// Removes an item from local storage
localStorage.removeItem('location');

// Returns the key of the index
console.log(localStorage.key(0))


// Clears the local storage, by removing all key/value
// localStorage.clear();

// Complex data
const userPreferences = {
  theme: 'dark',
  notifications: {
    email: true,
    sms: false
  },
  language: 'en'
};

const cart = ['keyboard', 'mouse', 'monitor'];

// Coverts the object or array to a string before storing them in the local storage
localStorage.setItem('cartItems', JSON.stringify(cart));
localStorage.setItem('userPreferences', JSON.stringify(userPreferences));


// Coverts the object string or array string back to a JavaScript object or array
const currentUserPreferences = JSON.parse(localStorage.getItem('userPreferences'));
console.log(currentUserPreferences.theme);

const currentUserCartItems = JSON.parse(localStorage.getItem('cartItems'));
console.log(currentUserCartItems[0]);


// Session Storage
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function(event) {
    sessionStorage.setItem('password', event.target.value);
});


window.addEventListener('load', function(e) {
    const passwordFromSessionStorage = this.sessionStorage.getItem('password');
    passwordInput.value = passwordFromSessionStorage;
} )

