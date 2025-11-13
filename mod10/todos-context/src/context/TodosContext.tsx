import { createContext, useState, useEffect } from "react";

const data = [
  {
    id: "1",
    text: "Design landing page",
    completed: true,
  },
  {
    id: "2",
    text: "Set up CI/CD pipeline",
    completed: true,
  },
  {
    id: "3",
    text: "Fix login bug",
    completed: false,
  },
  {
    id: "4",
    text: "Write unit tests",
    completed: false,
  },
  {
    id: "5",
    text: "Deploy to staging",
    completed: false,
  },
];

interface TodosContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    editTodo: (id: string, newText: string) => void;
    clearCompleted: () => void;
}

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export const TodosContext = createContext<TodosContextType | null>(null);


interface TodosProviderProps {
    children: React.ReactNode
}

export function TodosProvider({children}: TodosProviderProps) {
    // State data
    // TODO: Read stored todos from localstorage
    const [todos, setTodos] = useState<Todo[]>(data);

    // TODO: Store todos when the todos array changes
    useEffect(() => {}, []);

    // TODOS: Actions
    const addTodo = () => {};
    const deleteTodo = () => {};
    const toggleTodo = () => {};
    const editTodo = () => {};
    const clearCompleted = () => {};

    return (
        <TodosContext.Provider value={{todos, addTodo, deleteTodo, toggleTodo, editTodo, clearCompleted}}>
            {children}
        </TodosContext.Provider>
    )

}