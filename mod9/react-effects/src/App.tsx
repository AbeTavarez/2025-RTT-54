import './App.css'
import Counter from './components/Counter';
import EffectExamples from './components/EffectExamples';
import ProfileEditor from './components/ProfileEditor';
import TodoList from './components/TodosList';
import { useEffect, useState} from 'react'

function App() {
  // useState
  const [state, setState] = useState(null);
  
  const fetchUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    console.log(data);
    setState(data);
  }
  
  // useEffect(() => {}, []); <--- default to this!

  // useEffect
  // useEffect(() => {
  //   // side effect logic
  //   console.log('Hello from use Effect');
  //   document.title = 'Hello useEffect';
  //   fetchUser();
  // }, []);

  
  return (
    <div>
      <h1>React Effects</h1>

      <Counter />
      <hr />
      <ProfileEditor/>
      <hr />
      <TodoList />
      <hr />
      <EffectExamples />
    </div>
  )
}


export default App;