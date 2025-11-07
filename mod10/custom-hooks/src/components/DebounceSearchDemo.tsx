import useDebounce from "../hooks/useDebounce";
import { useState } from "react";

function DebounceSearchDemo() {
  const [text, setText] = useState("");
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(text, delay);
  return (
    <div>
      <h3>Debounce Search Demo</h3>

      <label htmlFor="delay">Debounce Delay (ms): </label>
      <input
        name="delay"
        type="number"
        value={delay}
        onChange={(e) => setDelay(parseInt(e.target.value))}
      />
      <br />
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>Current Input: {text}</div>
      <div>Debounced Value (after 500ms): {debouncedValue}</div>
    </div>
  );
}

export default DebounceSearchDemo;
