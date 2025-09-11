// Variable declarations
let username = "Abraham"
const age = 30
let isStudent = true
console.log(username, age)

let favNumber = 3
console.log("USER FAVORITE NUMBER: ", favNumber)

let userList;
userList = "list of favorite things"
console.log(userList)

// Variable re-assignment
favNumber = 10
console.log(favNumber)


let myValue = "Hello"
myValue = 100
console.log(myValue)


// Template Literals
let greeting = "Hello, my name is " + username + " and I am " + age + " years old.";
console.log(greeting)

let newGreeting = `Hello my name is ${username} and I am ${age} years old `;
console.log(newGreeting)


// Math
let a = 10;
let b = 5;

let result = a + b;

result = a - b;

result = b * b;

result = a / b;

result = a % b;

result  = b ** b;
console.log("Result: ",result);


let count = 10;
count++
count++
count--

count += 10
count -= 2
count *= 2
count /= 2
console.log("COUNT: ", count);

// Function declaration
function greet() {
    console.log('Hello World!');
}

// Function call
greet();


function greetUser(username) {
    console.log("Hello", username + '!');
}

greetUser("Lisa")
greetUser("Mark")
greetUser("Ann")
greetUser("Bob")

//
function greetUserFullname(firstName, lastName) {
    return `Hello, ${firstName}, ${lastName}!`;
}

let message = greetUserFullname("Abe", "Tavarez")
console.log(message);


function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function alertUser(balance) {
    alert(`Your balance is ${balance}`)
}

const addition = add(5, 8)

console.log(addition);

// Bank
let balance = 10;
let deposit = 100;

balance = add(balance, deposit)
console.log('NEW BALANCE: ', balance);

let price = 50

balance = subtract(balance, price)
console.log('UPDATED BALANCE: ', balance );

// alertUser(balance)


// Math Object

let randomInteger = Math.floor(Math.random() * 10) + 1;
console.log(randomInteger); // Random number between 1 and 10