import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Galeria from './pages/Galeria'
import Historia from './pages/Historia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Historia />
    </>
  )
}

export default App
