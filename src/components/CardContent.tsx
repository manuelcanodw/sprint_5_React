import React from 'react';
import type { CardContentProps } from '../types/cardProps';

const CardContent: React.FC<CardContentProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="card-title">
        {title}
      </h2>
      <p className="card-description">
        {description}
      </p>
    </>
  );
};

export default CardContent; 