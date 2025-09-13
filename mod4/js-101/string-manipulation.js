// let text1 = "The quick brown fox jumps over the lazy dog.";

// // Converts string to lowercase
// let result1 = text1.toLowerCase();
// console.log(result1); // the quick brown fox jumps over the lazy dog.

// // Converts string to uppercase
// let result2 = text1.toUpperCase();
// console.log(result2); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// // Capitalize string
// let text2 = "hello"
// let result3 = text2.substring(0, 1).toUpperCase() + text2.substring(1);
// console.log(result3); // Hello

function formatFullName(firstName, lastName) {
  //  checks if either the first or last name is missing
  if (firstName === undefined || lastName === undefined) {
    return "Invalid input name";
  }

  firstName = firstName.substring(0, 1).toUpperCase() + firstName.substring(1);
  lastName = lastName.substring(0, 1).toUpperCase() + lastName.substring(1);

  return `${lastName}, ${firstName}`;
}

let results = formatFullName("Tim", "frazier");
console.log(results);
