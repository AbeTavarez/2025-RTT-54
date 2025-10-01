

function logMessage(message: string, level?: string): void {
    const logLevel = level || 'info';
    console.log(`[${logLevel.toUpperCase()}]:`, message);
}

logMessage('hello world')
logMessage('hello world', 'error');


function greetUser(name: string, greeting: string = 'Hello') {
    return `${greeting}, ${name}`;
}

console.log(greetUser('John'));
console.log(greetUser('John', 'Whats up'));



function formatInput(input: string): string;
function formatInput(input: string[]): string;


function formatInput(input: string | string[]) {
    if (typeof input === 'string'){
        return input.toUpperCase();
    } else {
        return input.join(', ').toUpperCase()
    }
}

console.log(formatInput('hello world'));

console.log(formatInput(["apple", "banana"]));

