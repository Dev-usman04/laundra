import React from 'react';
import TimeSlot from '../TimeSlot';
import { Package, ArrowRight } from 'lucide-react';
import { getTomorrowDate } from '../../utils/dateUtils';

const timeSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'];

const ScheduleStep = ({
  pickupDate,
  setPickupDate,
  pickupTime,
  setPickupTime,
  deliveryDate,
  setDeliveryDate,
  deliveryTime,
  setDeliveryTime
}) => {
  const getMinDeliveryDate = () => {
    if (!pickupDate) return getTomorrowDate();
    const deliveryMin = new Date(pickupDate);
    deliveryMin.setDate(deliveryMin.getDate() + 1);
    return deliveryMin.toISOString().split('T')[0];
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Schedule Pickup & Delivery
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pickup */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center">
            <Package className="w-5 h-5 mr-2 text-purple-500" />
            Pickup
          </h3>
          <div className="space-y-3">
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={getTomorrowDate()}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            />
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <TimeSlot
                  key={`pickup-${time}`}
                  time={time}
                  selected={pickupTime === time}
                  onClick={() => setPickupTime(time)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 text-pink-500" />
            Delivery
          </h3>
          <div className="space-y-3">
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              min={getMinDeliveryDate()}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            />
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <TimeSlot
                  key={`delivery-${time}`}
                  time={time}
                  selected={deliveryTime === time}
                  onClick={() => setDeliveryTime(time)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleStep;