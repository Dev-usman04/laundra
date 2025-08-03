import React from 'react';

const PricingStep = ({
  selectedService,
  weight,
  setWeight,
  itemCount,
  setItemCount,
  calculateTotal,
  email,
  setEmail
}) => {
  const isDryClean = selectedService === 'dry-clean';

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Calculate Your Order
      </h2>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* Email Input */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Your Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., user@example.com"
            className="w-full px-4 py-3 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {isDryClean ? (
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-700">
              Number of Items
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setItemCount(Math.max(1, itemCount - 1))}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl hover:shadow-lg transition-all transform hover:scale-110"
              >
                -
              </button>
              <span className="text-3xl font-bold text-gray-800 w-16 text-center">
                {itemCount}
              </span>
              <button
                onClick={() => setItemCount(itemCount + 1)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl hover:shadow-lg transition-all transform hover:scale-110"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-700">
              Weight (kg)
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setWeight(Math.max(1, weight - 0.5))}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl hover:shadow-lg transition-all transform hover:scale-110"
              >
                -
              </button>
              <span className="text-3xl font-bold text-gray-800 w-16 text-center">
                {weight}
              </span>
              <button
                onClick={() => setWeight(weight + 0.5)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl hover:shadow-lg transition-all transform hover:scale-110"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Price Display */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Total Cost</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${calculateTotal()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStep;
