import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ service, selected, onClick, icon: Icon, color }) => {
  return (
    <div 
      className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
        selected 
          ? `${color} border-transparent shadow-2xl scale-105` 
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className={`p-3 rounded-full ${selected ? 'bg-white bg-opacity-20' : 'bg-gray-100'}`}>
          <Icon className={`w-8 h-8 ${selected ? 'text-white' : 'text-gray-600'}`} />
        </div>
        <h3 className={`font-semibold text-lg ${selected ? 'text-white' : 'text-gray-800'}`}>
          {service.name}
        </h3>
        <p className={`text-sm text-center ${selected ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
          {service.description}
        </p>
        <div className={`text-2xl font-bold ${selected ? 'text-white' : 'text-gray-800'}`}>
          ${service.basePrice}/kg
        </div>
      </div>
      {selected && (
        <div className="absolute top-4 right-4">
          <CheckCircle className="w-6 h-6 text-white animate-bounce" />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;