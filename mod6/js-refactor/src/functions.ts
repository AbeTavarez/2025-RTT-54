

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