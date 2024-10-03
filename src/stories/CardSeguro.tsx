import './CardSeguro.css';
import { useState } from 'preact/hooks'; // Cambia esto a 'react' si es necesario

interface CardSeguroProps {
  title: string; // parámetro 1
  description: string; // parámetro 2
  pathImg: string; // parámetro 3, para pasar un ícono personalizado
}

const CardSeguro: React.FC<CardSeguroProps> = ({ title, description, pathImg }) => {
  const [isHover, setIsHover] = useState(false);

  const svgStyles = {
    opacity: isHover ? 1 : 0.3, // Cambia la opacidad según isHover
    filter: !isHover ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(200%) contrast(100%)' : 'none'
  };

  return (
    <div
      className='card'
      onMouseEnter={() => setIsHover(true)}  // Cambia el estado a true al hacer hover
      onMouseLeave={() => setIsHover(false)} // Cambia el estado a false al salir del hover
    >
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
