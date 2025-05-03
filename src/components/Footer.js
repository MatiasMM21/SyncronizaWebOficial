import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo-white.svg" alt="Syncroniza" />
            </Link>
            <p className="footer-tagline">
              Transformamos digitalmente la construcción con soluciones tecnológicas que potencian la productividad y reducen costos.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/syncroniza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/syncroniza.cl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Empresa</h3>
            <ul>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/casos-exito">Casos de Éxito</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/trabaja-con-nosotros">Trabaja con nosotros</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Soluciones</h3>
            <ul>
              <li><Link to="/soluciones/control-avance">Control de Avance</Link></li>
              <li><Link to="/soluciones/control-costos">Control de Costos</Link></li>
              <li><Link to="/soluciones/last-planner-system">Last Planner System</Link></li>
              <li><Link to="/soluciones/bim-4d">Integración BIM 4D</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contacto</h3>
            <p><strong>Dirección:</strong> Av. Apoquindo 6410, Of. 605, Las Condes, Santiago</p>
            <p><strong>Email:</strong> <a href="mailto:contacto@syncroniza.cl">contacto@syncroniza.cl</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:+56229382040">+56 2 2938 2040</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Syncroniza. Todos los derechos reservados.</p>
          <div className="legal-links">
            <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
            <Link to="/politica-de-privacidad">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;