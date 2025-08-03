import React from 'react';
import ServiceCard from '../ServiceCard';
import { services } from '../../data/services';

const ServiceSelection = ({ selectedService, setSelectedService }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Choose Your Service
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            selected={selectedService === service.id}
            onClick={() => setSelectedService(service.id)}
            icon={service.icon}
            color={service.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;