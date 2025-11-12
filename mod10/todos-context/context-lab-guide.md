# Lab Guide: Building a Todo App with the React Context API

## Steps

- Step 1: Set Up Your Project
Use context, and components directories to organize your code.

- Step 2: Plan the Contexts
- Step 3: Create the TodoContext
- Step 4: Create the FilterContext
- Step 5: Create the ThemeContext
- Step 6: Wrap the App with All Providers
- Step 7: Build the Components: TodoList, TodoItem, TodoInput, FilterButtons, ThemeToggleButton:

TodosList: 
 Read FilterContext and TodosContext -> Filter the todos using the filter -> maps over the filteredTodos -> Render TodoItem for each todo

TodoItem: 
 Takes todo as a prop -> Read TodosContext (functions) -> Has local state for editing state -> shows text, checkbox, edit and delete buttons -> shows edit input if editing state is true -> manage local state for newText/setNewText for editing

FilterButtons:
 Read FilterContext -> Shows buttons for each filter -> sets filter in FilterContext on click

ThemeToggleButton:
 Read ThemeContext -> Shows button to toggle theme -> sets theme in ThemeContext on click

App:
 Renders:
 <ThemeToggleButton/>
 <TodoInput/>
 <FilterButtons />
 <TodosList/>
 <button>Clear Completed</button>