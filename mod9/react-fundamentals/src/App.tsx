import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  // Handles the click on the button
  const handleClick = () => console.log("clicked");

  return (
    <main className="card">
      <h1>Hello React! {10 + 9} </h1>

      <img src={reactLogo} alt="logo" />

      <img src="/public/vite.svg" alt="" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum
        mollitia doloribus ipsam maiores nulla eligendi, reprehenderit, soluta
        ullam voluptatum, quaerat iusto eos ipsa. Magnam natus temporibus totam
        repellendus et?
      </p>

      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="" />
      </form>

      <button onClick={handleClick}>Click me</button>

      <div className="loading-bar"/>


    </main>
  );
}

export default App;
