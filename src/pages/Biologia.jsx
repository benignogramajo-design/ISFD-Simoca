import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondoBiologiaJpg from '../assets/fondos/Fondo BIOLOGÍA.jpg';
import logoEscuelaJpg from '../assets/logos/Logo Escuela.jpg';

const Biologia = () => {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundImage: `url(${fondoBiologiaJpg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
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
    height: '80px',
    backgroundColor: 'rgba(144, 238, 144, 0.5)', // Verde claro transparente
    borderRadius: '15px',
    border: 'none',
    margin: '10px',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '0.95rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '15px',
    transition: 'transform 0.2s',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  };

  return (
    <div style={containerStyle}>
      {/* Franja negra superior */}
      <header style={{
        backgroundColor: 'black',
        height: '2cm',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        color: 'white',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoEscuelaJpg} alt="Logo Escuela" style={{ width: '2cm', height: '2cm', objectFit: 'contain' }} />
          <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>I.S.F.D. Escuela Normal Superior Manuel Belgrano</span>
            <span style={{ fontSize: '0.9rem' }}>Gomez Llueca 950 - Simoca – Tucumán</span>
          </div>
        </div>
      </header>

      {/* Botones de Navegación */}
      <div style={{ display: 'flex', gap: '10px', padding: '10px 15px', width: '100%', justifyContent: 'flex-start', boxSizing: 'border-box' }}>
        <button onClick={() => navigate(-1)} style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>← Anterior</button>
        <button onClick={() => navigate('/')} style={{ backgroundColor: '#00BFFF', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>🏠 Inicio</button>
      </div>

      <h1 style={{ color: 'black', marginTop: '40px', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
        BIOLOGIA
      </h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '15px', 
        marginTop: '30px',
        maxWidth: '1200px',
        paddingBottom: '40px'
      }}>
        <button onClick={() => navigate('/BiologiaDatosAlumnos')} style={buttonStyle}>
          CARGAR DATOS DE ALUMNOS
        </button>
        <button onClick={() => navigate('/BiologiaCalificacionesAlumnos')} style={buttonStyle}>
          CARGAR CALIFICACIONES DE ALUMNOS
        </button>
        <button onClick={() => navigate('/BiologiaLibroMatriz')} style={buttonStyle}>
          LIBRO MATRIZ
        </button>
        <button onClick={() => navigate('/BiologiaLibroPlanillas')} style={buttonStyle}>
          LIBRO DE PLANILLAS
        </button>
        <button onClick={() => navigate('/BiologiaLibroActas')} style={buttonStyle}>
          LIBRO DE ACTAS
        </button>
        <button onClick={() => navigate('/BiologiaCompendios')} style={buttonStyle}>
          COMPENDIOS EN BLANCO
        </button>
        <button onClick={() => navigate('/BiologiaPlanificacion')} style={buttonStyle}>
          ENTREGA DE PLANIFICACION
        </button>
        <button onClick={() => navigate('/BiologiaProgramaAnual')} style={buttonStyle}>
          ENTREGA DE PROGRAMA ANUAL
        </button>
        <button onClick={() => navigate('/BiologiaProgramaReal')} style={buttonStyle}>
          ENTREGA DE PROGRAMA REAL
        </button>
        <button onClick={() => navigate('/BiologiaLegajoAlumno')} style={buttonStyle}>
          LEGAJO DE ALUMNO
        </button>
        <button onClick={() => navigate('/BiologiaRegistroExamen')} style={buttonStyle}>
          REGISTRO MESAS DE EXAMEN
        </button>
      </div>
    </div>
  );
};

export default Biologia;