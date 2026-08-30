import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHome from './pages/HomeHome'; // Asegúrate de que esta carpeta exista o cámbialo a './HomeHome'
import HomeAdministracion from './pages/HomeAdministracion';
import HomePreceptoria from './pages/HomePreceptoria';
import Biologia from './pages/Biologia';
import AdministracionInstitucional from './pages/submenu/AdministracionInstitucional';
import AdministracionConstanciasDocentes from './pages/submenu/AdministracionConstanciasDocentes';
import AdministracionConstanciaAlumnos from './pages/submenu/AdministracionConstanciaAlumnos';
import AdministracionEstadisticas from './pages/submenu/AdministracionEstadisticas';
import BiologiaDatosAlumnos from './pages/submenu/BiologiaDatosAlumnos';
import BiologiaCalificacionesAlumnos from './pages/submenu/BiologiaCalificacionesAlumnos';
import BiologiaLibroMatriz from './pages/submenu/BiologiaLibroMatriz';
import BiologiaLibroPlanillas from './pages/submenu/BiologiaLibroPlanillas';
import BiologiaLibroActas from './pages/submenu/BiologiaLibroActas';
import BiologiaCompendios from './pages/submenu/BiologiaCompendios';
import BiologiaPlanificacion from './pages/submenu/BiologiaPlanificacion';
import BiologiaProgramaAnual from './pages/submenu/BiologiaProgramaAnual';
import BiologiaProgramaReal from './pages/submenu/BiologiaProgramaReal';
import BiologiaLegajoAlumno from './pages/submenu/BiologiaLegajoAlumno';
import BiologiaRegistroExamen from './pages/submenu/BiologiaRegistroExamen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHome />} />
        <Route path="/HomeAdministracion" element={<HomeAdministracion />} />
        <Route path="/HomePreceptoria" element={<HomePreceptoria />} />
        <Route path="/Biologia" element={<Biologia />} />
        <Route path="/AdministracionInstitucional" element={<AdministracionInstitucional />} />
        <Route path="/AdministracionConstanciasDocentes" element={<AdministracionConstanciasDocentes />} />
        <Route path="/AdministracionConstanciaAlumnos" element={<AdministracionConstanciaAlumnos />} />
        <Route path="/AdministracionEstadisticas" element={<AdministracionEstadisticas />} />
        <Route path="/BiologiaDatosAlumnos" element={<BiologiaDatosAlumnos />} />
        <Route path="/BiologiaCalificacionesAlumnos" element={<BiologiaCalificacionesAlumnos />} />
        <Route path="/BiologiaLibroMatriz" element={<BiologiaLibroMatriz />} />
        <Route path="/BiologiaLibroPlanillas" element={<BiologiaLibroPlanillas />} />
        <Route path="/BiologiaLibroActas" element={<BiologiaLibroActas />} />
        <Route path="/BiologiaCompendios" element={<BiologiaCompendios />} />
        <Route path="/BiologiaPlanificacion" element={<BiologiaPlanificacion />} />
        <Route path="/BiologiaProgramaAnual" element={<BiologiaProgramaAnual />} />
        <Route path="/BiologiaProgramaReal" element={<BiologiaProgramaReal />} />
        <Route path="/BiologiaLegajoAlumno" element={<BiologiaLegajoAlumno />} />
        <Route path="/BiologiaRegistroExamen" element={<BiologiaRegistroExamen />} />
      </Routes>
    </Router>
  );
}

export default App
