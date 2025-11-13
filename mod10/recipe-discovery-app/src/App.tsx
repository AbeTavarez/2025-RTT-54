
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

function App() {


  return (
    <>
      <h1>Recipes App</h1> 

      <Routes>
        <Route path='/' element={<HomePage />} />  
        <Route path='/category/:categoryName' element={<CategoryPage />} />  
      </Routes>     
    </>
  )
}

export default App
