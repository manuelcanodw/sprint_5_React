import React from 'react';
import type { IndicatorProps } from '../types/indicatorProps';

const Indicator: React.FC<IndicatorProps> = ({ step, steps, setStep }) => {
  const selectorCard = (i: number) => {
    setStep(i);
  };

  return (
    <div className="selector-card">
      {Array.from({ length: steps }).map((_item, index) => (
        <div
          key={index}
          className={`indicator-dot ${step === index ? 'active' : ''}`}
          onClick={() => selectorCard(index)}
        />
      ))}
    </div>
  );
};

export default Indicator; 