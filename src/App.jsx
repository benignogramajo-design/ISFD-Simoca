import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHome from './pages/HomeHome'; // Asegúrate de que esta carpeta exista o cámbialo a './HomeHome'
import HomeAdministracion from './pages/HomeAdministracion';
import HomePreceptoria from './pages/HomePreceptoria';
import AdministracionInstitucional from './pages/submenu/AdministracionInstitucional';
import AdministracionConstanciasDocentes from './pages/submenu/AdministracionConstanciasDocentes';
import AdministracionConstanciaAlumnos from './pages/submenu/AdministracionConstanciaAlumnos';
import AdministracionEstadisticas from './pages/submenu/AdministracionEstadisticas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHome />} />
<Route path="/HomeAdministracion" element={<HomeAdministracion />} />
<Route path="/HomePreceptoria" element={<HomePreceptoria />} />
<Route path="/AdministracionInstitucional" element={<AdministracionInstitucional />} />
        <Route path="/AdministracionConstanciasDocentes" element={<AdministracionConstanciasDocentes />} />
        <Route path="/AdministracionConstanciaAlumnos" element={<AdministracionConstanciaAlumnos />} />
        <Route path="/AdministracionEstadisticas" element={<AdministracionEstadisticas />} />
      </Routes>
    </Router>
  );
}

export default App
