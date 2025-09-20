const todosCounter = document.getElementById('counter');
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todosList = document.getElementById('todo-list');


addTodoBtn.addEventListener('click', function() {
    // get the text from the input
    const inputText = todoInput.value;

    // check that the inputText is not ""

    // Create the new li
    const newLi = document.createElement('li');
    newLi.textContent = inputText; // set the text of the li
    newLi.classList.add('item'); // adds a class name to the li

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'; // set the text of the button
    removeBtn.classList.add('remove'); // adds a class name to the button

    newLi.appendChild(removeBtn)
    todosList.appendChild(newLi)

    // update the todos count
    countTodos()
});


todosList.addEventListener('click', function(event) {
    console.dir(event);
    
    // If the user clicks on the remove button 
    if (event.target.classList.contains('remove')) {
        event.target.closest('li').remove();
        // update the todos count
        countTodos()
    }
    
    // if the user clicks on the li
    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('completed');
    }
});

// Counts how many todos (lis) we currently have in the ui
function countTodos() {
    const todos = document.getElementsByClassName('item');
    console.log(todos.length);
    todosCounter.textContent = todos.length;
}
