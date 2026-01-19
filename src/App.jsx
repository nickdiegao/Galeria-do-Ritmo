import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Galeria from './pages/Galeria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Galeria />
    </>
  )
}

export default App
