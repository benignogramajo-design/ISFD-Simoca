import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importación de activos desde la carpeta assets
import fondoJpg from '../assets/fondos/Fondo 1.jpg';
import logoEscuelaJpg from '../assets/logos/Logo Escuela.jpg';
import imagenInicioJpg from '../assets/fondos/Imagen Inicio.jpg';
// Importación de logos para botones
import logoAdminJpg from '../assets/logos/Logo ADMINISTRACIÓN.jpg';
import logoPreceJpg from '../assets/logos/Logo PRECEPTORÍA.jpg';
import logoAlumnosJpg from '../assets/logos/Logo ALUMNOS.jpg';
import logoDocentesJpg from '../assets/logos/Logo DOCENTES.jpg';

const HomeHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Definición de secciones para el menú desplegable
  const menuSections = [
    { name: 'ADMINISTRACIÓN', subButtons: ['Personal', 'Finanzas', 'Documentación'], path: '/HomeAdministracion' },
    { name: 'PRECEPTORÍA', subButtons: ['Asistencia', 'Partes Diarios', 'Novedades'], path: '/HomePreceptoria' },
    { name: 'ALUMNOS', subButtons: ['Inscripciones', 'Exámenes', 'Legajos'], path: '/HomeAlumnos' },
    { name: 'DOCENTES', subButtons: ['Licencias', 'Capacitaciones', 'Designaciones'], path: '/HomeDocentes' },
  ];

  const circleButtonStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
  };

  return (
    <div style={{
      backgroundImage: `url(${fondoJpg})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      overflowX: 'hidden'
    }}>
      {/* Franja negra superior */}
      <header style={{
        backgroundColor: 'black',
        height: '2cm',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 15px',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoEscuelaJpg} alt="Logo Escuela" style={{ width: '2cm', height: '2cm', objectFit: 'contain' }} />
          <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.9rem' }}>I.S.F.D. Escuela Normal</span>
            <span style={{ fontSize: '0.9rem' }}>Superior Manuel Belgrano</span>
            <span style={{ fontSize: '0.9rem' }}>Gómez Llueca 950 - Simoca – Tucumán</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <button 
            onClick={toggleMenu} 
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', padding: '0 10px' }}
          >
            ☰
          </button>

          {/* Menú Desplegable */}
          {isMenuOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(2cm - 10px)',
              right: 0,
              backgroundColor: 'white',
              color: 'black',
              width: '260px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              {menuSections.map((section) => (
                <div key={section.name} style={{ borderBottom: '1px solid #eee' }}>
                  <div 
                    onClick={() => setExpandedSection(expandedSection === section.name ? null : section.name)}
                    style={{ padding: '12px 15px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    {section.name} <span>{expandedSection === section.name ? '▲' : '▼'}</span>
                  </div>
                  {expandedSection === section.name && (
                    <div style={{ backgroundColor: '#f9f9f9', paddingBottom: '5px' }}>
                      {section.subButtons.map(sub => (
                        <div key={sub} style={{ padding: '8px 30px', cursor: 'pointer', fontSize: '0.9rem', color: '#555' }}>
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ color: 'white', fontSize: '2.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.9)', margin: '20px 0' }}>
          Ciclo Lectivo {currentYear}
        </h2>

        <img src={imagenInicioJpg} alt="Institución" style={{ maxWidth: '60%', height: 'auto', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <button onClick={() => navigate('/HomeAdministracion')} style={{ ...circleButtonStyle, backgroundColor: 'red' }}>
            <img src={logoAdminJpg} alt="ADMINISTRACIÓN" style={{ width: '3cm', height: '3cm' }} />
            <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>ADMINISTRACIÓN</span>
          </button>

          <button onClick={() => navigate('/HomePreceptoria')} style={{ ...circleButtonStyle, backgroundColor: 'green' }}>
            <img src={logoPreceJpg} alt="PRECEPTORÍA" style={{ width: '3cm', height: '3cm' }} />
            <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>PRECEPTORÍA</span>
          </button>

          <button onClick={() => navigate('/HomeAlumnos')} style={{ ...circleButtonStyle, backgroundColor: 'blue' }}>
            <img src={logoAlumnosJpg} alt="ALUMNOS" style={{ width: '3cm', height: '3cm' }} />
            <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>ALUMNOS</span>
          </button>

          <button onClick={() => navigate('/HomeDocentes')} style={{ ...circleButtonStyle, backgroundColor: '#00BFFF' }}>
            <img src={logoDocentesJpg} alt="DOCENTES" style={{ width: '3cm', height: '3cm' }} />
            <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>DOCENTES</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeHome;