import React, { useState, useEffect } from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardButtons from './CardButtons';
import type { CardProps } from '../types/cardProps';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image,
  colorCard,
  nextStep, 
  prevStep, 
  currentStep, 
  totalSteps,
  setStep
}) => {
  const [animationClass, setAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para manejar la navegación con animación
  const handleNextStep = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setAnimationClass('fade-out');
      
      setTimeout(() => {
        nextStep();
        setAnimationClass('slide-in-right');
        
        setTimeout(() => {
          setAnimationClass('');
          setIsAnimating(false);
        }, 600);
      }, 400);
    }
  };

  const handlePrevStep = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setAnimationClass('fade-out');
      
      setTimeout(() => {
        prevStep();
        setAnimationClass('slide-in-left');
        
        setTimeout(() => {
          setAnimationClass('');
          setIsAnimating(false);
        }, 600);
      }, 400);
    }
  };

  // Función para manejar el cambio directo de paso
  const handleSetStep = (step: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      const slideInClass = step > currentStep ? 'slide-in-right' : 'slide-in-left';
      
      setAnimationClass('fade-out');
      
      setTimeout(() => {
        setStep(step);
        setAnimationClass(slideInClass);
        
        setTimeout(() => {
          setAnimationClass('');
          setIsAnimating(false);
        }, 600);
      }, 400);
    }
  };

  return (
    <div className={`card ${animationClass}`}>
      {/* Componente de imagen */}
      {image && (
        <CardImage 
          image={image}
          title={title}
          colorCard={colorCard}
        />
      )}
      
      {/* Contenedor para contenido y navegación */}
      <div className="card-content-wrapper">
        {/* Componente de contenido */}
        <CardContent 
          title={title}
          description={description}
        />

        {/* Componente de botones */}
        <CardButtons 
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
          setStep={handleSetStep}
        />
      </div>
    </div>
  );
};

export default Card;
