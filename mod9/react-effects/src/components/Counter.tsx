import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrementThreeTimes = () => {
    // If we did setCount(count + 1) three times, it might not work as expected
    // due to closures and batching. 'count' would be the same value from the render.
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // This might only increment by 1.
    // setCount(count + 3)

    
    
    // Using functional updates ensures each update uses the latest state:
    setCount(prevCount => prevCount + 1); // 0 + 1 return 1
    setCount(prevCount => prevCount + 1); // 1 + 1 return 2
    setCount(prevCount => prevCount + 1); // 2 + 1 return 3
    // This correctly increments by 3.
    console.log(count);
    console.log(count);
    console.log(count);
};

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
      <button onClick={handleIncrementThreeTimes}>Increment by 3</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;