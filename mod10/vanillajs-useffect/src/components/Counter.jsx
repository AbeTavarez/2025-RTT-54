import { useState, useEffect } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);

  // useEffects here...

  return (
    <div>
      <h1>Counter</h1>
      <h2>Current Count: {count}</h2>

      <div>
        <button>Decrement</button>
        <button>Increment</button>
        <button>Reset</button>
      </div>

      <label>
        Step Value:
        <input type="number" />
      </label>
      
      <div>
        <h3>Count History: </h3>
        <hr />


      </div>

      <span>Use ArrowUp to increment and ArrowDown to decrement.</span>
    </div>
  );
}
