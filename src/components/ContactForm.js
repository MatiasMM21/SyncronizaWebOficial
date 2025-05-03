import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
    interes: 'control-avance'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica de envío al backend
    try {
      // Simulación de envío exitoso (se reemplazaría por código real)
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      setError(null);
      
      // Resetear el formulario
      setFormData({
        nombre: '',
        cargo: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: '',
        interes: 'control-avance'
      });
      
    } catch (err) {
      setError('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
      setSubmitted(false);
    }
  };
  
  return (
    <div className="contact-form-wrapper">
      {submitted ? (
        <div className="form-success">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3>¡Gracias por contactarnos!</h3>
          <p>Hemos recibido tu mensaje. Uno de nuestros especialistas te contactará a la brevedad.</p>
          <button 
            className="cta-button primary"
            onClick={() => setSubmitted(false)}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <div className="form-error">{error}</div>}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="cargo">Cargo *</label>
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="empresa">Empresa *</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email corporativo *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="interes">¿En qué estás interesado? *</label>
            <select
              id="interes"
              name="interes"
              value={formData.interes}
              onChange={handleChange}
              required
            >
              <option value="control-avance">Control de Avance</option>
              <option value="control-costos">Control de Costos</option>
              <option value="last-planner">Last Planner System</option>
              <option value="bim-4d">Integración BIM 4D</option>
              <option value="todo">Solución Completa</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" className="cta-button primary">
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;