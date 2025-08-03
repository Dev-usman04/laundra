import React from 'react';

const AnimatedStep = ({ step, currentStep, children }) => {
  return (
    <div className={`transition-all duration-700 transform ${
      step === currentStep 
        ? 'opacity-100 translate-y-0 scale-100' 
        : step < currentStep 
        ? 'opacity-50 -translate-y-4 scale-95' 
        : 'opacity-0 translate-y-8 scale-95'
    }`}>
      {children}
    </div>
  );
};

export default AnimatedStep;