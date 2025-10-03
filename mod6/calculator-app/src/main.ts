const input1 = document.getElementById('input-1') as HTMLInputElement;
const input2 = document.getElementById('input-2') as HTMLInputElement;
const addBtn = document.getElementById('add') as HTMLButtonElement;
const subtractBtn = document.getElementById('subtract') as HTMLButtonElement;
const divideBtn = document.getElementById('divide') as HTMLButtonElement;
const multiplyBtn = document.getElementById('multiply') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

// Todo: add button
addBtn?.addEventListener('click', (e: PointerEvent) => {
  const num1 = Number(input1?.value);
  const num2 = Number(input2?.value);
  const result = add(num1, num2);
  resultDiv.innerHTML = `Result: ${result}`
});

// Todo: subtract button

// Todo: divide button

// Todo: multiply button

function add(a: number = 0, b: number = 0): number {
  return a + b;
}

function divide(a: number, b: number = 1): number | null {
  // return b === 0 ?  null : a / b;
  if (b === 0) {
    return null;
  } else {
    return a / b
  }
}

function subtract(a: number = 0, b: number = 0): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(add(3, 5));
console.log(divide(10, 2));
console.log(subtract(100, 20));
console.log(multiply(2,2));

// Function overloads for calculating squares or summing arrays
function calculate(value: number): number;
function calculate(values: number[]): number;


function calculate(input: number[] | number): number {
  if (typeof input === 'number') {
   return input ** 2; 
  } else {
    return input.reduce((acc, value) => acc + value, 0);
    // return input.reduce(add, 0);
  }
}

console.log(calculate(5));
console.log(calculate([1,2,3,4,5]));


// Apply user-defined rule to round numbers
function applyRule(num: number, rule: (n: number) => number): number {
  return rule(num);
}
 
// Example of using applyRule with a rounding rule
const roundToTenth = (n: number) => Math.round(n * 10) / 10;
const result = applyRule(5.678, roundToTenth); // Outputs 5.7
console.log(result);



// 

interface User {
  username: string;
  email: string;
}

function welcomeUser(user: User): string {
return `Welcome, ${user.username}! Your email is ${user.email}.`;
}

let newUser = { username: "john_doe", email: "john@example.com" };
console.log(welcomeUser(newUser));


interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Buddy",
  age: 3,
  breed: "Golden Retriever",
};

console.log(myDog);

type ID = number | string;

// Customer Exe.
interface Customer {
  id: ID;
  name: string;
  email: string;
  loyaltyMember?: boolean;
}

interface PremiumCustomer extends Customer {
  discount: number;
  loyaltyMember: true;
}

const newPremiumUser: PremiumCustomer = {
  id: '3445',
  name: 'Abel',
  email: "abel@gmail.com",
  loyaltyMember: true,
  discount: 70
}



// type Customer = {
//   id: number | string
//   name: string 
//   email: string 
//   loyaltyMember?: boolean
// }


function createCustomer(customer: Customer): string {
  return `
    Customer Created with id: ${customer.id}, 
    name: ${customer.name}, 
    email: ${customer.email},
    loyalty: ${customer.loyaltyMember ? 'Yes' : 'No'}
  `
}

const newCustomer: Customer = {
  id: 123,
  name: 'Abe',
  email: 'abe@gmail.com',
  // loyaltyMember: false
}

const createdCustomer = createCustomer(newCustomer);
console.log(createdCustomer);
