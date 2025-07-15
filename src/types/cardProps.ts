

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  colorCard?: string;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
  setStep: (step: number) => void;
}

export interface CardImageProps {
  image: string;
  title: string;
  colorCard?: string;
}

export interface CardContentProps {
  title: string;
  description: string;
}

export interface CardButtonsProps {
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
  totalSteps: number;
  setStep: (step: number) => void;
}