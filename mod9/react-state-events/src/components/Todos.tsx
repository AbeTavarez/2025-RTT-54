import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = () => {
    console.log(text);
    // create a new todo object
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    // add the new todo to the todos array
    setTodos([newTodo, ...todos]);
    // setTodos(prevTodos => [...prevTodos, newTodo]);
    setText("");
  };

  const handleDelete = (id: number) => {
    //
    console.log("deleting todo..." + id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    console.log("updating todo..." + id);

    setTodos(prevTodos => prevTodos.map(todo => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    }))
  };

  return (
    <div>
      <h2>Todos Mini App</h2>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleClick}>Create</button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{todo.text}</div>

            <div
              style={{ margin: "10px" }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.completed ? "Completed" : "Pending"}
            </div>

            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
