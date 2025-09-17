

// For Loop

// iterator; condition; incrementor
for (let i = 0; i < 10; i++) {
    console.log("Value: ", i);
}

for (let i = 10; i >= 0; i--) {
    console.log("Counting down: ", i);
}

for (let count = 0; count < 10; count += 2) {
    console.log("Count: ", count);
}


const fruits = ['apple', 'banana', 'cherry', 'mango'];

const newFruitsArray = [];

for (let item = 0; item < fruits.length; item++) {
    // console.log(`Fruit: ${fruits[item]}, at index: ${item}`); 
    
    // uppercase each string
    let upperCasedString = fruits[item].toUpperCase();

    // push or add the string to the array
    newFruitsArray.push(upperCasedString)
}

console.log(newFruitsArray);


const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const combinedArray = [...array1, ...array2]
console.log(combinedArray);
console.log(array1);
console.log(array2);

// For of loop
const users = ['max', 'lina', 'bob'];

for (let user of users) {
    console.log(user.toUpperCase());
}


// while loops

let count = 5;

while(count > 0) {
    console.log(count);
    count--;
}


// Do while loop
// let response;

// do {
//   response = prompt("Please type a message: (type exit to quit)");
//   console.log(`you said: ${response}`);
// } while (response !== 'exit');