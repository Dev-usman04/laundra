import React from "react";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import ScheduleStep from "./components/steps/ScheduleStep";
import PricingStep from "./components/steps/PricingStep";
import ConfirmationStep from "./components/steps/ConfirmationStep";
import AnimatedStep from "./components/AnimatedStep";
import { ServiceSelection } from "./components/steps/ServiceSelection";
import { useBookingState } from "./hooks/useBookingState";
import { ArrowRight } from "lucide-react";

const App = () => {
  const {
    currentStep,
    setCurrentStep,
    selectedService,
    setSelectedService,
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    deliveryDate,
    setDeliveryDate,
    deliveryTime,
    setDeliveryTime,
    weight,
    setWeight,
    itemCount,
    setItemCount,
    calculateTotal,
    canProceed,
    resetBooking,
  } = useBookingState();

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <ProgressBar currentStep={currentStep} />

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[500px]">
          {/* Step 1: Service Selection */}
          <AnimatedStep step={1} currentStep={currentStep}>
            {currentStep === 1 && (
              <ServiceSelection
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            )}
          </AnimatedStep>

          {/* Step 2: Schedule */}
          <AnimatedStep step={2} currentStep={currentStep}>
            {currentStep === 2 && (
              <ScheduleStep
                pickupDate={pickupDate}
                setPickupDate={setPickupDate}
                pickupTime={pickupTime}
                setPickupTime={setPickupTime}
                deliveryDate={deliveryDate}
                setDeliveryDate={setDeliveryDate}
                deliveryTime={deliveryTime}
                setDeliveryTime={setDeliveryTime}
              />
            )}
          </AnimatedStep>

          {/* Step 3: Pricing Calculator */}
          <AnimatedStep step={3} currentStep={currentStep}>
            {currentStep === 3 && (
              <PricingStep
                selectedService={selectedService}
                weight={weight}
                setWeight={setWeight}
                itemCount={itemCount}
                setItemCount={setItemCount}
                calculateTotal={calculateTotal}
              />
            )}
          </AnimatedStep>

          {/* Step 4: Confirmation */}
          <AnimatedStep step={4} currentStep={currentStep}>
            {currentStep === 4 && (
              <ConfirmationStep
                selectedService={selectedService}
                pickupDate={pickupDate}
                pickupTime={pickupTime}
                deliveryDate={deliveryDate}
                deliveryTime={deliveryTime}
                weight={weight}
                itemCount={itemCount}
                calculateTotal={calculateTotal}
                resetBooking={resetBooking}
              />
            )}
          </AnimatedStep>
        </div>

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                currentStep === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:shadow-md"
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 ${
                canProceed()
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
