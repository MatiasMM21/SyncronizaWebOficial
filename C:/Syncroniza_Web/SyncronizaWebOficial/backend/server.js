const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Inicializar app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Ruta para el formulario de contacto
app.post('/api/contact', (req, res) => {
  const { nombre, cargo, empresa, email, telefono, mensaje, interes } = req.body;
  
  // Aquí se procesaría el envío de email o guardado en base de datos
  // Por ahora solo simulamos una respuesta exitosa
  
  console.log('Formulario recibido:', req.body);
  
  // Simulación de procesamiento
  setTimeout(() => {
    res.status(200).json({
      success: true,
      message: 'Formulario recibido correctamente. Nos pondremos en contacto a la brevedad.'
    });
  }, 1000);
});

// Ruta para newsletter
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  // Aquí se procesaría la suscripción al newsletter
  console.log('Suscripción recibida:', email);
  
  setTimeout(() => {
    res.status(200).json({
      success: true,
      message: 'Te has suscrito correctamente a nuestro newsletter.'
    });
  }, 500);
});

// Para cualquier otra ruta, servir la app React en producción
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});