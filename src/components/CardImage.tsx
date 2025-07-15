import React from 'react';
import type { CardImageProps } from '../types/cardProps';

const CardImage: React.FC<CardImageProps> = ({ image, title, colorCard }) => {
  return (
    <div 
      className="card-image-container"
      style={{
        backgroundColor: colorCard || '#f5f5f5'
      }}
    >
      <img 
        src={image} 
        alt={title}
        className="card-image"
      />
    </div>
  );
};

export default CardImage; 