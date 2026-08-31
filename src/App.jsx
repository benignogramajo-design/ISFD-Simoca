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
import Primaria from './pages/Primaria';
import PrimariaDatosAlumnos from './pages/submenu/PrimariaDatosAlumnos';
import PrimariaCalificacionesAlumnos from './pages/submenu/PrimariaCalificacionesAlumnos';
import PrimariaLibroMatriz from './pages/submenu/PrimariaLibroMatriz';
import PrimariaLibroPlanillas from './pages/submenu/PrimariaLibroPlanillas';
import PrimariaLibroActas from './pages/submenu/PrimariaLibroActas';
import PrimariaCompendios from './pages/submenu/PrimariaCompendios';
import PrimariaPlanificacion from './pages/submenu/PrimariaPlanificacion';
import PrimariaProgramaAnual from './pages/submenu/PrimariaProgramaAnual';
import PrimariaProgramaReal from './pages/submenu/PrimariaProgramaReal';
import PrimariaLegajoAlumno from './pages/submenu/PrimariaLegajoAlumno';
import PrimariaRegistroExamen from './pages/submenu/PrimariaRegistroExamen';
import Tecnicatura from './pages/Tecnicatura';
import TecnicaturaDatosAlumnos from './pages/submenu/TecnicaturaDatosAlumnos';
import TecnicaturaCalificacionesAlumnos from './pages/submenu/TecnicaturaCalificacionesAlumnos';
import TecnicaturaLibroMatriz from './pages/submenu/TecnicaturaLibroMatriz';
import TecnicaturaLibroPlanillas from './pages/submenu/TecnicaturaLibroPlanillas';
import TecnicaturaLibroActas from './pages/submenu/TecnicaturaLibroActas';
import TecnicaturaCompendios from './pages/submenu/TecnicaturaCompendios';
import TecnicaturaPlanificacion from './pages/submenu/TecnicaturaPlanificacion';
import TecnicaturaProgramaAnual from './pages/submenu/TecnicaturaProgramaAnual';
import TecnicaturaProgramaReal from './pages/submenu/TecnicaturaProgramaReal';
import TecnicaturaLegajoAlumno from './pages/submenu/TecnicaturaLegajoAlumno';
import TecnicaturaRegistroExamen from './pages/submenu/TecnicaturaRegistroExamen';
import PreceptoriaCronogramaMesas from './pages/submenu/PreceptoriaCronogramaMesas';

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
        <Route path="/Primaria" element={<Primaria />} />
        <Route path="/PrimariaDatosAlumnos" element={<PrimariaDatosAlumnos />} />
        <Route path="/PrimariaCalificacionesAlumnos" element={<PrimariaCalificacionesAlumnos />} />
        <Route path="/PrimariaLibroMatriz" element={<PrimariaLibroMatriz />} />
        <Route path="/PrimariaLibroPlanillas" element={<PrimariaLibroPlanillas />} />
        <Route path="/PrimariaLibroActas" element={<PrimariaLibroActas />} />
        <Route path="/PrimariaCompendios" element={<PrimariaCompendios />} />
        <Route path="/PrimariaPlanificacion" element={<PrimariaPlanificacion />} />
        <Route path="/PrimariaProgramaAnual" element={<PrimariaProgramaAnual />} />
        <Route path="/PrimariaProgramaReal" element={<PrimariaProgramaReal />} />
        <Route path="/PrimariaLegajoAlumno" element={<PrimariaLegajoAlumno />} />
        <Route path="/PrimariaRegistroExamen" element={<PrimariaRegistroExamen />} />
        <Route path="/Tecnicatura" element={<Tecnicatura />} />
        <Route path="/TecnicaturaDatosAlumnos" element={<TecnicaturaDatosAlumnos />} />
        <Route path="/TecnicaturaCalificacionesAlumnos" element={<TecnicaturaCalificacionesAlumnos />} />
        <Route path="/TecnicaturaLibroMatriz" element={<TecnicaturaLibroMatriz />} />
        <Route path="/TecnicaturaLibroPlanillas" element={<TecnicaturaLibroPlanillas />} />
        <Route path="/TecnicaturaLibroActas" element={<TecnicaturaLibroActas />} />
        <Route path="/TecnicaturaCompendios" element={<TecnicaturaCompendios />} />
        <Route path="/TecnicaturaPlanificacion" element={<TecnicaturaPlanificacion />} />
        <Route path="/TecnicaturaProgramaAnual" element={<TecnicaturaProgramaAnual />} />
        <Route path="/TecnicaturaProgramaReal" element={<TecnicaturaProgramaReal />} />
        <Route path="/TecnicaturaLegajoAlumno" element={<TecnicaturaLegajoAlumno />} />
        <Route path="/TecnicaturaRegistroExamen" element={<TecnicaturaRegistroExamen />} />
        <Route path="/PreceptoriaCronogramaMesas" element={<PreceptoriaCronogramaMesas />} />
      </Routes>
    </Router>
  );
}

export default App
