import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Lessons from './pages/Lessons'
import Practice from './pages/Practice'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/lessons' element={<Lessons />} />
        <Route path='/practice' element={<Practice />} />
        </Routes>
    </>
  )
}

export default App
