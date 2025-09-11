let age = 60;

if (age > 59) {
  console.log("You are a senior citizen");
}

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not old enough to vote.");
}

let temperature = 30;

if (temperature >= 30) {
  console.log("It's too hot!");
} else if (temperature < 10) {
  console.log("It's too cold!");
} else if (temperature < 20) {
  console.log("Weather is getting better!");
} else {
  console.log("The weather is just right.");
}

let choice;
// let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");

switch (choice) {
  case "1":
    console.log("Starting the game...");
    break;
  case "2":
    console.log("Opening settings...");
    break;
  case "3":
    console.log("Exiting the game...");
    break;
  default:
    console.log("Invalid option, please try again.");
}

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin.");
}

let hasMembership = true;
let hasCoupon = false;

if (hasMembership || hasCoupon) {
  console.log("You are eligible for a discount.");
} else {
  console.log("You are not eligible for a discount.");
}

if (isLoggedIn) {
  console.log("User is logged in");

  if (isAdmin) {
    console.log("User is an admin");
    console.log(" Welcome to the Admin Dashboard!");
  }
}
