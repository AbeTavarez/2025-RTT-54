//
function applyDiscount(discountRate) {
  return function(price) {
    return price - (price * discountRate)
  }
}

const tenPercentDiscount = applyDiscount(0.10);
const twentyPercentDiscount = applyDiscount(0.20);

console.log(tenPercentDiscount(100));
console.log(twentyPercentDiscount(100));


//
function makeCounter(initialValue) {
  return function() {
    initialValue++
    return initialValue;
  }
}

const counter1 = makeCounter(5);
console.log(counter1());
console.log(counter1());

const counter2 = makeCounter(100);
console.log(counter2());
console.log(counter2());

//
function fetchUser(username, callback) {
  setTimeout(() => {
    const user = {username, id: Date.now()}
    callback(user)
  }, 1000);
}

function displayUser(user) {
  console.log(`User Info: ${user.username}, ${user.id}`);
}

fetchUser('Abe', displayUser);



// Destructuring
const numbers = [1,2,3];

let [first, second, third] = numbers;

console.log(first);
console.log(second);


const user = {
  username: "abe",
  age: 30,
  location: 'FL'
}

const {username, age, location} = user;
console.log(age);
console.log(location);


// Spread/Rest operator
const otherNumbers = [4,5,6];

const mergedNumbers = [...numbers, ...otherNumbers];

console.log(mergedNumbers);

const copyOfNumbers = [...numbers];

copyOfNumbers.push(4,5,6,7,8, ...otherNumbers);

console.log(copyOfNumbers);
console.log(numbers);

const admin = {username: 'Max'};

const person = {...user, id: 34}
console.log(person);


function sum(...numbers) {
  console.log(numbers);
}


sum(12,345,56,6778)
sum(12,345)
sum(12,345,56,788)