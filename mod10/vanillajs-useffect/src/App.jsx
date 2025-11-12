import useDocumentTitle from './hooks/useDocumentTitle'
import Counter from './components/Counter'
// import PostFetcher from './components/PostFetcher';
import useWindowSize from './hooks/useWindowSize';
import './App.css'

function App() {
  useDocumentTitle('React Custom Hooks');
  
  const windowSize = useWindowSize();
  console.log(`APP: ${windowSize.width}: ${windowSize.height}`);
  
  return (
    <div>
      {/* <h1>Vanilla JS + React</h1> */}

      {/* <PostFetcher /> */}

      <Counter />

    </div>
  )
}

export default App
