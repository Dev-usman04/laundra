import React from 'react';
import { CheckCircle } from 'lucide-react';
import { services } from '../../data/services';

const ConfirmationStep = ({
  selectedService,
  pickupDate,
  pickupTime,
  deliveryDate,
  deliveryTime,
  weight,
  itemCount,
  calculateTotal,
  resetBooking
}) => {
  const service = services.find(s => s.id === selectedService);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-800">Order Confirmed!</h2>
        <p className="text-gray-600">Your laundry service has been booked successfully</p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-200">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Order Summary</h3>
        <div className="space-y-3 text-gray-700">
          <p><strong>Service:</strong> {service?.name}</p>
          <p><strong>Pickup:</strong> {pickupDate} at {pickupTime}</p>
          <p><strong>Delivery:</strong> {deliveryDate} at {deliveryTime}</p>
          <p><strong>Quantity:</strong> {selectedService === 'dry-clean' ? `${itemCount} items` : `${weight} kg`}</p>
          <hr className="my-3" />
          <p className="text-xl font-bold"><strong>Total: ${calculateTotal()}</strong></p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          You will receive a confirmation SMS and email shortly.
        </p>
        <button
          onClick={resetBooking}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
        >
          Book Another Order 
        </button>
      </div>
    </div>
  );
}; 

export default ConfirmationStep;