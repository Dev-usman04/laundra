import React from 'react';

const TimeSlot = ({ time, selected, onClick, disabled = false }) => {
  return (
    <button
      className={`p-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
        selected 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white shadow-lg' 
          : disabled
          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:shadow-md'
      }`}
      onClick={() => !disabled && onClick()}
      disabled={disabled}
    >
      {time}
    </button>
  );
};

export default TimeSlot;