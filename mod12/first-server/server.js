const greet = require("./my-module");
// const myMath = require('./my-math');
const { subtract, add, logMessage } = require("./my-math");

console.log("Hello Node!");
console.log("Hello Express!");

console.log(greet("Abraham"));

console.log(add(5, 5));
console.log(subtract(10, 5));

// console.log(myMath.add(5,5));
// console.log(myMath.subtract(10,5));
logMessage('Hello World!')
logMessage('Nodemon!');