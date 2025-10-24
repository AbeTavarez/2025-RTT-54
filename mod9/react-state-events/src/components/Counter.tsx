import {useState} from 'react';

function Counter() {
    
    const [count, setCount] = useState(0);
    
    const addFive = () => setCount(count + 5); // use the setter function
    // const addFive = () => count + 5; // <-- don't update state directly
    

    return (
        <div>
            <h2>Counter</h2>
            <h3>Count: {count}</h3>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                
                <button onClick={() => setCount(0)}>Reset</button>
                
                <button onClick={addFive}>Add 5</button>

                <button onClick={() => setCount((prevCount) => prevCount + 10) }>Add 10</button>
            </div>
        </div>
    )
}

export default Counter;