import { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">

        {/* Mobile: menu à esquerda */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Logo (mobile only) */}
        <div className="logo mobile-logo">
          <img src="/logo.png" alt="Galeria do Ritmo" />
        </div>

        {/* Desktop menu */}
        <nav className="nav desktop">
          <Link to="/">Home</Link>
          <Link to="/historia">História</Link>
          <a href="#">Diretoria</a>
          <a href="#">Ações</a>
          <Link to="/galeria">Galeria</Link>
          <a href="#">Playlist</a>
          <a href="#">Organograma</a>
          <a href="#">Links</a>
        </nav>
      </div>

        {/* Mobile Menu */}
        {menuOpen && (
        <div className="mobile-overlay">
            <div className="mobile-menu">
            <button
                className="close-btn"
                onClick={() => setMenuOpen(false)}
            >
                ✕
            </button>

            <nav className="mobile-nav">
                <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
                <Link onClick={() => setMenuOpen(false)} to="/historia">História</Link>
                <Link onClick={() => setMenuOpen(false)} to="/diretoria">Diretoria</Link>
                <Link onClick={() => setMenuOpen(false)} to="/acoes">Ações</Link>
                <Link onClick={() => setMenuOpen(false)} to="/galeria">Galeria</Link>
                <Link onClick={() => setMenuOpen(false)} to="/playlist">Playlist</Link>
                <Link onClick={() => setMenuOpen(false)} to="/organograma">Organograma</Link>
                <Link onClick={() => setMenuOpen(false)} to="/links">Links</Link>
            </nav>
            </div>
        </div>
        )}
    </header>
  )
}

export default Header
