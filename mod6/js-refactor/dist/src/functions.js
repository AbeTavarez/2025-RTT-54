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
export {};
//# sourceMappingURL=functions.js.map