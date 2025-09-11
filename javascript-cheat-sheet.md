## 📘 JavaScript Cheat Sheet
1. Variables and Data Types

```javascript
// Variables
let name = "Alice";   // can be reassigned
const age = 25;       // cannot be reassigned
var oldVar = true;    // legacy way (avoid)

// Data Types
let str = "Hello";    // String
let num = 42;         // Number
let bool = true;      // Boolean
let arr = [1, 2, 3];  // Array
let obj = {key: "value"}; // Object
let undef;            // Undefined
let empty = null;     // Null
```

2. Template Literals
```javascript
let name = "Alice";
let age = 25;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); 
// Output: My name is Alice and I am 25 years old.
```

3. Basic Mathematical Operations
```javascript
let a = 10, b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation → 1000
```

4. Functions and Parameters

Parameters and Arguments
```javascript
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice"); // Argument → "Alice"
```

Returning Values
```javascript
function square(num) {
  return num * num;
}

let result = square(4); // 16
```

5. Functions with Multiple Parameters
```javascript
function add(x, y) {
  return x + y;
}

console.log(add(5, 7)); // 12
```

6. JavaScript Math Methods
```javascript
console.log(Math.round(4.7));  // → 5
console.log(Math.floor(4.7));  // → 4
console.log(Math.ceil(4.2));   // → 5
console.log(Math.max(3, 7, 1)); // → 7
console.log(Math.min(3, 7, 1)); // → 1
console.log(Math.random());    // random number (0–1)
console.log(Math.pow(2, 3));   // → 8
console.log(Math.sqrt(16));    // → 4
```

## 📘 JavaScript Cheat Sheet – Conditionals & Logic

1. Conditional Statements

`if` Statement:
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

`if...else` Statement:
```javascript
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

`else if` Statement:
```javascript
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

2. `switch` Statement:
```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day");
}
```

3. Logical Operators

AND `&&`:
```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted");
}
```

OR `||`:

```javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Day off!");
}
```

## 📘 JavaScript Cheat Sheet – Arrays & Loops
1. Introduction to Arrays

1. Declaring an Array:
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // → "apple"
```

2. Modifying Arrays:
```javascript
let fruits = ["apple", "banana"];
fruits[1] = "orange";        // Change value
fruits.push("grape");        // Add at end
fruits.unshift("mango");     // Add at start
fruits.pop();                // Remove last item
fruits.shift();              // Remove first item
console.log(fruits);
```

3. Common Array Methods
```javascript
let nums = [1, 2, 3, 4, 5];

nums.length;        // → 5
nums.indexOf(3);    // → 2
nums.includes(4);   // → true
nums.join(", ");    // "1, 2, 3, 4, 5"
nums.slice(1, 3);   // [2, 3]
nums.splice(2, 1);  // removes 1 item at index 2
nums.concat([6, 7]); // merges arrays
nums.reverse();     // reverses order
nums.sort();        // sorts (as strings by default)
```

4. Introduction to Loops

`for` loop:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

`for...of` loop:
```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry
```

`while` loop:
```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2

```
`do...while` loop:
```javascript
do...while loop:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
// Output: 0, 1, 2
```

5. Array Loop Methods:
```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach → run function for each item
numbers.forEach(num => console.log(num));

// map → returns a new array
let doubled = numbers.map(num => num * 2);

// filter → returns array of items that match condition
let evens = numbers.filter(num => num % 2 === 0);

// reduce → reduces array to single value
let sum = numbers.reduce((total, num) => total + num, 0);

// find → returns first item matching condition
let firstEven = numbers.find(num => num % 2 === 0);

// some → true if at least one matches
numbers.some(num => num > 3); // → true

// every → true if all match
numbers.every(num => num > 0); // → true
```

6. Loops Control Flow

`break` Statement:
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;  // stops the loop completely
  }
  console.log(i);
}
// Output: 1, 2
```

`continue` Statement:
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips this iteration
  }
  console.log(i);
}
// Output: 1, 2, 4, 5
```

## 📘 JavaScript Cheat Sheet – Objects

1. Introduction to Objects
```javascript
let person = {
  name: "Alice",
  age: 25,
  isStudent: false
};

console.log(person);
```

2. Create, Access, Update, and Delete 

Accessing Properties:
```javascript
console.log(person.name);     // Dot notation → "Alice"
console.log(person["age"]);   // Bracket notation → 25
```

Updating Properties:
```javascript
person.age = 26; // Update value
person.city = "New York"; // Add new property

console.log(person.age); // → 26
console.log(person.city); // → New York
```

Deleting Properties:
```javascript
delete person.isStudent;
console.log(person);
```

3. Common Object Methods

```javascript
let car = { brand: "Toyota", model: "Corolla", year: 2020 };

Object.keys(car);   // ["brand", "model", "year"]
Object.values(car); // ["Toyota", "Corolla", 2020]
Object.entries(car); 
// [["brand","Toyota"], ["model","Corolla"], ["year",2020]]

let newCar = Object.assign({}, car, { color: "blue" });
// {brand: "Toyota", model: "Corolla", year: 2020, color: "blue"}

let frozenCar = Object.freeze(car); 
// prevents adding, updating, or deleting properties
```