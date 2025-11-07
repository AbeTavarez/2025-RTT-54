import useLocalStorage from "./hooks/useLocalStorage";
import useFetchData from "./hooks/useFetchData";
import useForm from "./hooks/useForm";
import "./App.css";
import DebounceSearchDemo from "./components/DebounceSearchDemo";
import PaginationDemo from "./components/PaginationDemo";

function App() {
  const [storedValue, setStoredValue] = useLocalStorage("username", "Abe");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos",
  );

  // const initValues = {email: '', password: ''}
  const { values, handleChange, handleSubmit, resetForm } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Custom Hooks</h1>
      <DebounceSearchDemo />
      <hr />

      <PaginationDemo />

      <div>
        <h2>Sign In Form</h2>
        <form onSubmit={handleSubmit}>
          <input value={values.email} onChange={handleChange} name="email" />
          <input
            value={values.password}
            onChange={handleChange}
            name="password"
          />
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>

      <div>
        <button onClick={() => setStoredValue("Abe")}>
          Update Username: {storedValue}
        </button>

        <button onClick={() => setTheme("light")}>Theme: {theme}</button>

        {loading && <div>Loading...</div>}

        {error && <div>{error.message}</div>}

        {data && data.map((todo) => <div key={todo.id}>{todo.title}</div>)}
      </div>
    </>
  );
}

export default App;
