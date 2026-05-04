import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagenInicioJpg from '../assets/fondos/Imagen Inicio.jpg';

const HomeAdministracion = () => {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundImage: `url(${imagenInicioJpg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100vw',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    overflowX: 'hidden'
  };

  const buttonStyle = {
    width: '280px',
    height: '180px',
    backgroundColor: 'rgba(255, 0, 0, 0.43)', // Rojo claro transparente
    borderRadius: '25px', // Esquinas circulares
    border: 'none',
    margin: '15px',
    fontWeight: 'bold', // Texto negrillo
    color: 'black', // Color negro
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    transition: 'transform 0.2s',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: 'black', marginTop: '50px', fontSize: '2.5rem', fontWeight: 'bold' }}>
        ADMINISTRACIÓN
      </h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '40px',
        maxWidth: '800px'
      }}>
        <button onClick={() => navigate('/AdministracionInstitucional')} style={buttonStyle}>
          PERSONAL INSTITUCIONAL
        </button>
        <button onClick={() => navigate('/AdministracionConstanciasDocentes')} style={buttonStyle}>
          REGISTRO Y CONSTANCIAS DE DOCENTES
        </button>
        <button onClick={() => navigate('/AdministracionConstanciaAlumnos')} style={buttonStyle}>
          REGISTRO Y CONSTANCIA DE ALUMNOS
        </button>
        <button onClick={() => navigate('/AdministracionEstadisticas')} style={buttonStyle}>
          PLANILLAS Y ESTADÍSTICAS
        </button>
      </div>
    </div>
  );
};

export default HomeAdministracion;