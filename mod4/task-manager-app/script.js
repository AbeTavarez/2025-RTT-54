const taskNameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('category');
const deadlineInput = document.getElementById('deadline');
const statusInput = document.getElementById('status');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListUl = document.getElementById('task-list');

// Arrays of Tasks
const tasks = [];

// Event Listeners
addTaskBtn.addEventListener('click', addTask);

// Handler functions
function addTask() {
    const taskName = taskNameInput.value;
    const category = categoryInput.value;
    const deadline = deadlineInput.value;
    const status = statusInput.value;

    if (!taskName || !category || !deadline || !status) {
        alert('Please fill in all fields.');
        return;
    }
    console.log("Task Values");
    console.log(taskName, category, deadline, status);
    
    const newTask = {
        taskName,
        category,
        deadline,
        status
    }

    tasks.push(newTask);
    console.log(tasks);
    displayTasks()
}

function displayTasks() {
    
}