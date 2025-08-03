import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <Sparkles className="w-8 h-8 text-purple-500 mr-2 animate-spin" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          LAUNDRA
        </h1>
        <Sparkles className="w-8 h-8 text-pink-500 ml-2 animate-spin" />
      </div>
      <p className="text-gray-600 text-lg">Premium laundry service at your doorstep</p>
    </div>
  );
};

export default Header;