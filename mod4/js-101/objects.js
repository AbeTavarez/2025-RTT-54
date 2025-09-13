// Create a new object
const user = {
  firstName: "Abe",
  lastName: "Tavarez",
  age: 30,
  isStudent: false,
  favoriteColor: "blue",
  greet() {
    console.log(`Hello, my name is ${this.firstName}, age ${this.age}`)
  },
  updateFavoriteColor(newColor) {
    this.favoriteColor = newColor
  }
};

console.log(user.firstName);
console.log(user.isStudent);
console.log(user["age"]);


// Add a new property
user.location = "New York";

// updating a property
user.age = 32;

// Delete a property
delete user.isStudent;

// user.age = null;
user.age = 0;
user.favoriteColor = "blue";



console.log(user.favoriteColor);

// Object method
user.greet()
user.updateFavoriteColor("red")

console.log(user.favoriteColor);