import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className='footer-title'>
                    G.R.C.E.S. Galeria do Ritmo
                </p>

                <p className='footer-copy'>
                    © {new Date().getFullYear()} Galeria do Ritmo. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;