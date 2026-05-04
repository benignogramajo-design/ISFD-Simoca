import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHome from './pages/HomeHome'; // Asegúrate de que esta carpeta exista o cámbialo a './HomeHome'
import HomeAdministracion from './pages/HomeAdministracion';
import AdministracionInstitucional from './pages/AdministracionInstitucional';
import AdministracionConstanciasDocentes from './pages/AdministracionConstanciasDocentes';
import AdministracionConstanciaAlumnos from './pages/AdministracionConstanciaAlumnos';
import AdministracionEstadisticas from './pages/submenu/AdministracionEstadisticas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHome />} />
        <Route path="/HomeAdministracion" element={<HomeAdministracion />} />
        <Route path="/AdministracionInstitucional" element={<AdministracionInstitucional />} />
        <Route path="/AdministracionConstanciasDocentes" element={<AdministracionConstanciasDocentes />} />
        <Route path="/AdministracionConstanciaAlumnos" element={<AdministracionConstanciaAlumnos />} />
        <Route path="/AdministracionEstadisticas" element={<AdministracionEstadisticas />} />
      </Routes>
    </Router>
  );
}

export default App
