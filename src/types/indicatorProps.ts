export interface IndicatorProps {
  step: number;
  steps: number;
  setStep: (step: number) => void;
}

export interface StyledPProps {
  $active: number;
} 