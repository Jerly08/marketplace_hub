"use client";

import React from 'react';
import { FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';

interface ProductActionsProps {
  productId: number;
  onAddToCart?: (id: number) => void;
  onAddToWishlist?: (id: number) => void;
  onShare?: (id: number) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  productId,
  onAddToCart = () => {},
  onAddToWishlist = () => {},
  onShare = () => {}
}) => {
  return (
    <div className="border-t border-gray-200 pt-6 mt-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => onAddToCart(productId)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex-1 flex items-center justify-center gap-2"
        >
          <FiShoppingCart size={18} />
          Add to Cart
        </button>
        <button 
          onClick={() => onAddToWishlist(productId)}
          className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          <FiHeart size={18} />
        </button>
        <button 
          onClick={() => onShare(productId)}
          className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          <FiShare2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductActions; 