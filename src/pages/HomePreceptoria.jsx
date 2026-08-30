import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagenInicioJpg from '../assets/fondos/Fondo 1.jpg';
import logoEscuelaJpg from '../assets/logos/Logo Escuela.jpg';

const HomePreceptoria = () => {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundImage: `url(${imagenInicioJpg})`,
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
    height: '180px',
    backgroundColor: 'rgba(0, 128, 0, 0.43)', // Verde claro transparente
    borderRadius: '25px', // Esquinas circulares
    border: 'none',
    margin: '15px',
    fontWeight: 'bold', // Texto negrillo
    color: 'white', // Texto color blanco
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

      <h1 style={{ color: 'black', marginTop: '50px', fontSize: '2.5rem', fontWeight: 'bold' }}>
        PRECEPTORÍA
      </h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '40px',
        maxWidth: '800px'
      }}>
        <button onClick={() => navigate('/Biologia')} style={buttonStyle}>
          BIOLOGIA
        </button>
        <button onClick={() => navigate('/Primaria')} style={buttonStyle}>
          PRIMARIA
        </button>
        <button onClick={() => navigate('/Tecnicatura')} style={buttonStyle}>
          TECNICATURA
        </button>
      </div>
    </div>
  );
};

export default HomePreceptoria;