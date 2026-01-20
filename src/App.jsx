import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Galeria from './pages/Galeria'
import Historia from './pages/Historia'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Acoes from './pages/Acoes'
import Diretoria from './pages/Diretoria'
import Links from './pages/Links'
import Playlist from './pages/Playlist'
import Organograma from './pages/Organograma'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/links" element={<Links />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/organograma" element={<Organograma />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
