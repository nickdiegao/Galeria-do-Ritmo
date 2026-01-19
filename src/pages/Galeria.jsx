import { useState } from 'react'
import './Galeria.css'

function Galeria() {
  const imagens = [
    '/galeria/1.jpeg',
    '/galeria/2.jpeg',
    '/galeria/3.jpeg',
    '/galeria/4.jpeg',
    '/galeria/5.jpeg',
    '/galeria/6.jpeg',
    '/galeria/7.jpeg',
    '/galeria/8.jpeg',
    '/galeria/9.jpeg',
    '/galeria/10.jpeg',
    '/galeria/11.jpeg',
    '/galeria/12.jpeg',
    '/galeria/13.jpeg',
    '/galeria/14.jpeg',
    '/galeria/15.jpeg',
    '/galeria/16.jpeg',
    '/galeria/17.jpeg',
    '/galeria/18.jpeg',
    '/galeria/19.jpeg',
    '/galeria/20.jpeg',
    '/galeria/21.jpeg',
    '/galeria/22.jpeg',
    '/galeria/23.jpeg',
    '/galeria/24.jpeg',
    '/galeria/25.jpeg',
    '/galeria/26.jpeg',
    '/galeria/27.jpeg',
    '/galeria/28.jpeg',
    '/galeria/29.jpeg',
    '/galeria/30.jpeg',
    '/galeria/31.jpeg',
    '/galeria/32.jpeg',
    '/galeria/33.jpeg',
    '/galeria/34.jpeg',
    '/galeria/35.jpeg',
    '/galeria/36.jpeg',
    '/galeria/37.jpeg',
    '/galeria/38.jpeg',
    '/galeria/39.jpeg',
    '/galeria/40.jpeg',
  ]

  const [imagemIndex, setImagemIndex] = useState(null)

  const fechar = () => setImagemIndex(null)

  const anterior = (e) => {
    e.stopPropagation()
    setImagemIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const proxima = (e) => {
    e.stopPropagation()
    setImagemIndex((prev) => (prev < imagens.length - 1 ? prev + 1 : prev))
  }

  return (
    <main className="galeria">
      <section className="galeria-header">
        <img src="/logo.png" alt="Galeria do Ritmo" />
        <h1>Galeria</h1>
      </section>

      <section className="galeria-grid">
        {imagens.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            loading="lazy"
            onClick={() => setImagemIndex(index)}
          />
        ))}
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox ${imagemIndex !== null ? 'lightbox-open' : ''}`}
        onClick={fechar}
      >
        {imagemIndex !== null && (
            <>
                <button className="nav-btn left" onClick={anterior}>
                    ‹
                </button>
                <img src={imagens[imagemIndex]} alt="" />
                <button className="nav-btn right" onClick={proxima}>
                    ›
                </button>     
            </>
        )}
      </div>
    </main>
  )
}

export default Galeria
