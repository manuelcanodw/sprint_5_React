import React from 'react';
import Button from './Button';
import Indicator from './Indicator';
import type { CardButtonsProps } from '../types/cardProps';

const CardButtons: React.FC<CardButtonsProps> = ({ 
  nextStep, 
  prevStep, 
  currentStep, 
  totalSteps,
  setStep
}) => {
  return (
    <div className="card-navigation-container">
      {/* Indicador de pasos - Izquierda */}
      <Indicator 
        step={currentStep}
        steps={totalSteps}
        setStep={setStep}
      />
      
      {/* Botones de navegación - Derecha */}
      <div className="card-navigation">
        <Button 
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="secondary"
        >
          ←
        </Button>
        
        <Button 
          onClick={nextStep}
          disabled={currentStep === totalSteps - 1}
          variant="primary"
        >
          →
        </Button>
      </div>
    </div>
  );
};

export default CardButtons; 