import { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);
  const [saving, setSaving] = useState(false);
    
  useDocumentTitle("Counter App");
  
  // Updates the countHistory
  useEffect(() => {
    setCountHistory((prevCountHistory) =>
      prevCountHistory.length > 0 && prevCountHistory.at(-1) === count
        ? prevCountHistory
        : [...prevCountHistory, count],
    );
  }, [count]);

  // AutoSave History to localstorage
  useEffect(() => {
    let timerId = null;
    try {
      console.log("saving...");

      setSaving(true);
      localStorage.setItem("countHistory", JSON.stringify(countHistory));
      timerId = setTimeout(() => {
        setSaving(false);
      }, 500);
    } catch (e) {
      console.log(e);
    }

    // cleanup function
    return () => {
      localStorage.removeItem("countHistory");
      clearTimeout(timerId);
    };
  }, [countHistory]);

  // Keyboard Events
  useEffect(() => {
    const onArrowUp = (e) => e.key === "ArrowUp" && setCount(count + 1);
    const onArrowDown = (e) => e.key === "ArrowDown" && setCount(count - 1);
    document.addEventListener("keydown", onArrowUp);
    document.addEventListener("keydown", onArrowDown);

    // cleanup function
    return () => {
      document.removeEventListener("keydown", onArrowDown);
      document.removeEventListener("keydown", onArrowUp);
    };
  }, [count]);

  const handleReset = () => {
    setCount(0);
    setCountHistory([]);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>Current Count: {count}</h2>

      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <label>
        Step Value:
        <input type="number" />
      </label>

      {saving && <p>Saving...</p>}

      <div>
        <h3>Count History: </h3>
        <hr />
        {countHistory && countHistory.map((c, i) => <p key={i}>{c}</p>)}
      </div>

      <span>Use ArrowUp to increment and ArrowDown to decrement.</span>
    </div>
  );
}
