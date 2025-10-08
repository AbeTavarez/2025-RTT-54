/**
 * Promises are a way to manage asynchronous tasks in JavaScript. They represent a value that may not be available yet but will be resolved at some point in the future.
 */
const myPromise = new Promise((resolve, _reject) => {
  // do something async
  setTimeout(() => {
    resolve("Got some Data!");
  }, 250);
});

myPromise.then((data) => console.log(data)).catch((e) => console.error(e));

// setTimeout(() => console.log('timeout'), 2000);
const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

// wait(10 * 1000)
//   .then(() => console.log("10 seconds"))
//   .catch((e) => console.error(e));

// wait(1000).then(() => console.log("Another one"));

const promise0 = new Promise((res, rej) => {
  setTimeout(rej, 100, "fast");
});
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2, promise0]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});

Promise.any([]) // <-- provides the first success only promise 
Promise.race([]) // <-- provides the first promise success or not 
