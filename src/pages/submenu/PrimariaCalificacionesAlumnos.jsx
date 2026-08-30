import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondoPrimariaJpg from '../../assets/fondos/Fondo PRIMARIA.jpg';
import logoEscuelaJpg from '../../assets/logos/Logo Escuela.jpg';

const PrimariaCalificacionesAlumnos = () => {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundImage: `url(${fondoPrimariaJpg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
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

      <div style={{ display: 'flex', gap: '10px', padding: '10px 15px', width: '100%', justifyContent: 'flex-start', boxSizing: 'border-box' }}>
        <button onClick={() => navigate(-1)} style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>← Anterior</button>
        <button onClick={() => navigate('/')} style={{ backgroundColor: '#00BFFF', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>🏠 Inicio</button>
      </div>

      <h1 style={{ color: 'black', marginTop: '50px', fontSize: '2rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
        CARGAR CALIFICACIONES DE ALUMNOS
      </h1>
    </div>
  );
};

export default PrimariaCalificacionesAlumnos;