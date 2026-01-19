import { useState } from 'react'
import './Header.css'

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
          <a href="#">História</a>
          <a href="#">Diretoria</a>
          <a href="#">Ações</a>
          <a href="#">Galeria</a>
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
                <a onClick={() => setMenuOpen(false)} href="#">História</a>
                <a onClick={() => setMenuOpen(false)} href="#">Diretoria</a>
                <a onClick={() => setMenuOpen(false)} href="#">Ações</a>
                <a onClick={() => setMenuOpen(false)} href="#">Galeria</a>
                <a onClick={() => setMenuOpen(false)} href="#">Playlist</a>
                <a onClick={() => setMenuOpen(false)} href="#">Organograma</a>
                <a onClick={() => setMenuOpen(false)} href="#">Links</a>
            </nav>
            </div>
        </div>
        )}
    </header>
  )
}

export default Header
