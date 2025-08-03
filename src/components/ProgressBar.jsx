import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Service' },
    { number: 2, label: 'Schedule' },
    { number: 3, label: 'Details' },
    { number: 4, label: 'Confirm' }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${
              step.number <= currentStep 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-110' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step.number < currentStep ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                step.number
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`h-1 w-16 mx-2 transition-all duration-500 ${
                step.number < currentStep ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        {steps.map(step => (
          <span key={step.number}>{step.label}</span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;