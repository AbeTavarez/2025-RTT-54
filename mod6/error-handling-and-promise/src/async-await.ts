async function fetchUsers() {
  try {
    // fetch data from an API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // parse the json data
    const users = await response.json();
    // users data
    console.log(users);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("finally");
  }
}

// fetchUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .catch((e) => console.error(e))
//   .then((users) => console.log(users))
//   .catch((e) => console.error(e));


async function fetchComments() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const comments = await response.json();
        console.log(comments);
        return comments;
    } catch (error) {
        console.error(error);
    } finally{
        console.log("Data fetched");
    }
}

try {
    // const comments = await fetchComments();
    // comments.forEach(comment => console.log(comment.body))
} catch (error) {
    console.error(error)
}


// Promise.resolve().then(() => console.log("One"));
// console.log("Two");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 
wait(0).then(() => console.log("Cat"));
 
Promise.resolve()
  .then(() => console.log("Dog"))
  .then(() => console.log("Cow"));
 
console.log("Bird");