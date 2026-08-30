import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagenInicioJpg from '../assets/fondos/Fondo 1.jpg';
import logoEscuelaJpg from '../assets/logos/Logo Escuela.jpg';
import logoBiologiaJpg from '../assets/logos/Logo BIOLOGÍA.jpg';
import logoPrimariaJpg from '../assets/logos/Logo PRIMARIA.jpg';
import logoTecnicaturaJpg from '../assets/logos/Logo TECNICATURA.jpg';

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
        gap: '30px', 
        marginTop: '40px',
        maxWidth: '1000px'
      }}>
        <button onClick={() => navigate('/Biologia')} style={{ ...circleButtonStyle, backgroundColor: 'green' }}>
          <img src={logoBiologiaJpg} alt="BIOLOGIA" style={{ width: '3cm', height: '3cm' }} />
          <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>BIOLOGIA</span>
        </button>

        <button onClick={() => navigate('/Primaria')} style={{ ...circleButtonStyle, backgroundColor: '#00BFFF' }}>
          <img src={logoPrimariaJpg} alt="PRIMARIA" style={{ width: '3cm', height: '3cm' }} />
          <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>PRIMARIA</span>
        </button>

        <button onClick={() => navigate('/Tecnicatura')} style={{ ...circleButtonStyle, backgroundColor: '#FFD700' }}>
          <img src={logoTecnicaturaJpg} alt="TECNICATURA" style={{ width: '3cm', height: '3cm' }} />
          <span style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>TECNICATURA</span>
        </button>
      </div>
    </div>
  );
};

export default HomePreceptoria;