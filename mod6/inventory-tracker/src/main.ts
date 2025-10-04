import Stack from "./models/Stack";


const stack = new Stack<string>();

stack.push('Apple');
stack.push('Pineapple');
stack.push('Grapes');
stack.push('Mango');

const removedFruit =stack.pop();
console.log(removedFruit);


const topItem = stack.peek();
console.log(topItem);


console.log(stack);
