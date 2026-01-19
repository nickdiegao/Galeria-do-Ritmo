import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Galeria from './pages/Galeria'
import Historia from './pages/Historia'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
