import React, { useState, useEffect } from 'react';

const EffectExamples: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  // Example 1: Runs after every render (no dependency array)
//   useEffect(() => {
//     console.log('Effect 1: Component rendered or updated');
//     document.title = `Count: ${count}`; // Be careful, can cause loops if it sets state
//   });

  // Example 2: Runs once after initial render (empty dependency array)
  useEffect(() => {
    console.log('Effect 2: Component mounted (initial render)');
    // Fetch initial data, set up global listeners, etc.
    document.title = 'React App - useEffect';
  }, []); // Empty array means run once

  // Example 3: Runs when 'count' changes
  useEffect(() => {
    console.log(`Effect 3: Count changed to ${count}`);
    // Perform actions related to 'count' changing
    if (count > 0) {
      document.title = `Count: ${count}`;
    }
  }, [count]); // Re-run only if 'count' changes

  // Example 4: Runs when 'text' changes
  useEffect(() => {
    console.log(`Effect 4: Text changed to ${text}`);
  }, [text]); // Re-run only if 'text' changes

  return (
    <div>
      <p>Count: {count}</p>
      
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

      <br />
      
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something"/>

      <p>Text: {text}</p>
    </div>
  );
};

export default EffectExamples;