import React from 'react';
import type { ButtonProps } from '../types/buttonProps';

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  disabled = false, 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const baseClasses = 'card-button';
  const combinedClasses = `${baseClasses} ${disabled ? 'disabled' : ''} ${className}`.trim();

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={variant === 'primary' ? 'Siguiente' : 'Anterior'}
    >
      {children}
    </button>
  );
};

export default Button; 