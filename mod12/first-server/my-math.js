const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const logMessage = (message) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

module.exports = { add, subtract, logMessage };