import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Soluciones from './pages/Soluciones';
import CasosExito from './pages/CasosExito';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;