import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

import './App.css'
import Navbar from './components/Navbar';

const data = [
  {
    id: 1,
    slug: "introduction-to-react-context-api",
    title: "Introduction to React Context API",
    content:
      "The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level. In this post, we'll explore how to set up Context, create providers, and consume context values using the useContext hook."
  },
  {
    id: 2,
    slug: "building-a-todo-app-with-react",
    title: "Building a Todo App with React",
    content:
      "Creating a Todo App is one of the best ways to learn React fundamentals. We'll cover setting up state, handling events, and rendering lists dynamically. By the end, you'll understand how to manage component state and create interactive user interfaces."
  },
  {
    id: 3,
    slug: "understanding-useeffect-hook",
    title: "Understanding the useEffect Hook",
    content:
      "The useEffect hook allows you to perform side effects in function components, such as fetching data, updating the DOM, or setting up subscriptions. In this article, we'll look at how to use it correctly and avoid common pitfalls like infinite re-renders."
  }
];

function App() {
  const [blogs, setBlogs] = useState(data);

  return (
    <>
      <Navbar />
      <h1>Blog App</h1>

      <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/blog' element={<BlogPage blogs={blogs} />} />
        
        <Route path='/login' element={<LoginPage />}/>

        <Route path='/admin' element={<AdminPage />} />
        
        <Route path='/blog/:slug' element={<BlogDetailsPage blogs={blogs}/>} />
      </Routes>
    </>
  )
}

export default App
