
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import { useEffect } from 'react'

function App() {

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const response = await fetch('/api/user', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         "x-api-key": "supersecretkey"
  //       }
  //     })
  //   }

  //   fetchData();
  // })


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
