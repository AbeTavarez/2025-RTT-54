import {Routes, Route} from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import ProfilePage from './pages/Profile';

function App() {


  return (
    <>
      <h1>React Router App</h1>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/users/:username' element={<ProfilePage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
