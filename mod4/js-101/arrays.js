
// Create a new array
const fruits = ['apple', 'banana', 'cherry', 'mango'];

// add a item to the end of the array
fruits[fruits.length] = "orange";

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);


// Array methods

// add an item to the end of the array
fruits.push('kiwi', 'pear');

// remove the last item from the array and returns it
let removedFruit = fruits.pop();

console.log('REMOVED FRUIT: ', removedFruit);


// add an item to the start of the array
fruits.unshift('grape')

// removes the first item in an array
fruits.shift();



// Find method
const myFavFruit = fruits.find((fruit) => fruit === 'cherry');
console.log(myFavFruit);

// Loop over the array
fruits.forEach((fruit) => console.log(fruit));

// ['apple', 'banana]
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// add, remove, or delete items from an array

//           start, count, new items...
fruits.splice(2, 0, 'pineapple', 'watermelon');
console.log(fruits);