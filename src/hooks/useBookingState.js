import { useState, useEffect } from 'react';
import { services } from '../data/services';
import { getTomorrowDate, getMinDeliveryDate } from '../utils/dateUtils';

export const useBookingState = () => {
  // Step management
  const [currentStep, setCurrentStep] = useState(1);

  // Service selection
  const [selectedService, setSelectedService] = useState(null);

  // Scheduling
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  // Pricing
  const [weight, setWeight] = useState(1);
  const [itemCount, setItemCount] = useState(1);

  // Customer info (for future expansion)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });

  // Initialize dates
  useEffect(() => {
    const minDate = getTomorrowDate();
    if (!pickupDate) {
      setPickupDate(minDate);
    }
    if (!deliveryDate) {
      const deliveryMin = getMinDeliveryDate(pickupDate || minDate);
      setDeliveryDate(deliveryMin);
    }
  }, [pickupDate]);

  // Calculate total cost
  const calculateTotal = () => {
    if (!selectedService) return 0;
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;
    
    const quantity = selectedService === 'dry-clean' ? itemCount : weight;
    return (service.basePrice * quantity).toFixed(2);
  };

  // Check if current step can proceed
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null;
      case 2:
        return pickupDate && pickupTime && deliveryDate && deliveryTime;
      case 3:
        return weight > 0 || itemCount > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  // Reset booking to start over
  const resetBooking = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setPickupTime('');
    setDeliveryTime('');
    setWeight(1);
    setItemCount(1);
    setCustomerInfo({ name: '', phone: '', address: '' });
    
    // Reset dates to tomorrow
    const minDate = getTomorrowDate();
    setPickupDate(minDate);
    setDeliveryDate(getMinDeliveryDate(minDate));
  };

  return {
    // Step management
    currentStep,
    setCurrentStep,

    // Service selection
    selectedService,
    setSelectedService,

    // Scheduling
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    deliveryDate,
    setDeliveryDate,
    deliveryTime,
    setDeliveryTime,

    // Pricing
    weight,
    setWeight,
    itemCount,
    setItemCount,

    // Customer info
    customerInfo,
    setCustomerInfo,

    // Computed values
    calculateTotal,
    canProceed,

    // Actions
    resetBooking
  };
};