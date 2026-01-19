import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Galeria from './pages/Galeria'
import Historia from './pages/Historia'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/historia' element={<Historia />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
