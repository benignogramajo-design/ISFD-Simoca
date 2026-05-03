import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHome from '../HomeHome';
// Importarás los otros componentes a medida que los crees
// import HomeAdministracion from './pages/HomeAdministracion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHome />} />
        {/* Aquí irás agregando las rutas para las otras páginas */}
        {/* <Route path="/administracion" element={<HomeAdministracion />} /> */}
      </Routes>
    </Router>
  );
}

export default App
