function logMessage(message, level) {
    const logLevel = level || 'info';
    console.log(`[${logLevel.toUpperCase()}]:`, message);
}
logMessage('hello world');
logMessage('hello world', 'error');
function greetUser(name, greeting = 'Hello') {
    return `${greeting}, ${name}`;
}
console.log(greetUser('John'));
console.log(greetUser('John', 'Whats up'));
function formatInput(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else {
        return input.join(', ').toUpperCase();
    }
}
function formatInput(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else {
        return input.join(', ').toUpperCase();
    }
}
console.log(formatInput('hello world'));
console.log(formatInput(["apple", "banana"]));
export {};
//# sourceMappingURL=functions.js.map