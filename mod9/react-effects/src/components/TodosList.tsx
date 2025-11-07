import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let nextId = 1;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleAddTodo = () => {
    if (!inputText.trim()) return;

    setTodos(prevTodos => [
      ...prevTodos,
      { id: nextId++, text: inputText, completed: false }
    ]);
    
    setInputText('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => handleToggleTodo(todo.id)} >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;