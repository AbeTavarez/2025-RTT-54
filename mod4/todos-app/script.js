let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
 
addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value;
 
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
 
  let listItem = document.createElement("li");
  listItem.innerText = taskText;
 
  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});