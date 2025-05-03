import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src="/assets/logo.svg" alt="Syncroniza" />
          </Link>
        </div>

        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú principal"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname === '/nosotros' ? 'active' : ''}>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className={location.pathname === '/soluciones' ? 'active' : ''}>
              <Link to="/soluciones">Soluciones</Link>
            </li>
            <li className={location.pathname === '/casos-exito' ? 'active' : ''}>
              <Link to="/casos-exito">Casos de Éxito</Link>
            </li>
            <li className={location.pathname === '/blog' ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={location.pathname === '/contacto' ? 'active' : ''}>
              <Link to="/contacto" className="btn-primary nav-cta">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;