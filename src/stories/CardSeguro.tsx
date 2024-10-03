import React from 'react';
import './CardSeguro.css';

interface CardSeguroProps {
  isHover: boolean;
  title: string; // parámetro 1
  description: string; // parámetro 2
  pathImg: string; // parámetro 3, para pasar un ícono personalizado
}

const CardSeguro: React.FC<CardSeguroProps> = ({ isHover, title, description, pathImg }) => {

  const svgStyles = {
    opacity: isHover ? 1 : 0.3, // Cambia la opacidad según isHover
    transition: 'opacity 0.3s ease', // Transición suave de opacidad
    filter: !isHover ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(200%) contrast(100%)' : 'none'
  };

  return (
    <div className='card'>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        {isHover && <span className='description'>{description}</span>}
      </div>
      <div className="icon-container" style={svgStyles}>
        <img
          src={pathImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default CardSeguro;
