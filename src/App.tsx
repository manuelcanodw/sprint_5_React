import { useState } from 'react'
import Card from './components/card'
import { tutorialData } from './data/tutorialData'

function App() {
  // Estado para llevar la cuenta del paso actual
  const [currentStep, setCurrentStep] = useState<number>(0)

  // Obtener los datos del paso actual
  const currentTutorialStep = tutorialData[currentStep]

  // Función para ir al siguiente paso
  const nextStep = () => {
    if (currentStep < tutorialData.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  // Función para ir al paso anterior
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="app-container">
      <h1 className="app-title">
        Tutorial de React
      </h1>
      
      {/* Mostrar el paso actual */}
      <div className="step-indicator">
        Paso {currentStep + 1} de {tutorialData.length}
      </div>

      {/* Componente Card con los datos del paso actual y funciones de navegación */}
      <Card 
        title={currentTutorialStep.title}
        description={currentTutorialStep.description}
        image={currentTutorialStep.image}
        colorCard={currentTutorialStep.colorCard}
        nextStep={nextStep}
        prevStep={prevStep}
        currentStep={currentStep}
        totalSteps={tutorialData.length}
      />
    </div>
  )
}

export default App


