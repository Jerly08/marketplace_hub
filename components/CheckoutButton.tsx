"use client";

import React from 'react';

interface CheckoutButtonProps {
  onClick?: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton; 