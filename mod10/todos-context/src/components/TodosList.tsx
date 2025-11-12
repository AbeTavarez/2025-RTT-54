import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FilterContext } from "../context/FilterContext";

function TodosList() {
  const { todos } = useContext(TodosContext);
  const { filter } = useContext(FilterContext);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div>
      <h2>Todos List</h2>
      <div>Filter: {filter}</div>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}

export default TodosList;
