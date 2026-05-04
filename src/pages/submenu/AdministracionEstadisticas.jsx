import React from 'react';
import imagenInicioJpg from '../../assets/fondos/Fondo 1.jpg';

const AdministracionEstadisticas = () => {
  const containerStyle = {
    backgroundImage: `url(${imagenInicioJpg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: 'black', marginTop: '50px' }}>PLANILLAS Y ESTADÍSTICAS</h1>
    </div>
  );
};

export default AdministracionEstadisticas;