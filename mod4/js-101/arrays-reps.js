
// Task 3: Render the List in the Browser

// 1. Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.

// 2. Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.

// 3.Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

const shoppingList = [];

// Select or query elements
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemsUl = document.getElementById("shopping-list");
const removeBtn = document.getElementById("remove-btn");


console.log(input);
console.log(addButton);
console.log(itemsUl);

function addAndDisplayItems() {
    // add the item to the array
    shoppingList.push(input.value);
   
    // create a new element
    let li = document.createElement('li');

    // update the element with the text
    li.textContent = input.value;
    
    // append the new element to the ul
    itemsUl.appendChild(li);

    // clears the input text
    input.value = "";

    console.log(shoppingList);
}

function removeLastItemAndUpdate() {
    // remove the last item in the array
    shoppingList.pop();

    // remove the last item from the ul
    itemsUl.lastElementChild.remove();

    console.log(shoppingList);
    
}

addButton.addEventListener('click', addAndDisplayItems);
removeBtn.addEventListener('click', removeLastItemAndUpdate);