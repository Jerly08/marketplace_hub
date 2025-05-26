"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { Product } from '../lib/api';

interface CartItemProps {
  product: Product;
  quantity: number;
  updateQuantity?: (id: number, change: number) => void;
  removeItem?: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  product, 
  quantity,
  updateQuantity = () => {},
  removeItem = () => {}
}) => {
  return (
    <div className="flex items-center p-6">
      <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="ml-6 flex-1">
        <Link href={`/product/${product.id}`} className="text-lg font-medium text-gray-800 hover:text-indigo-600">
          {product.title}
        </Link>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
      </div>

      <div className="flex items-center ml-6">
        <button 
          onClick={() => updateQuantity(product.id, -1)}
          className="text-gray-500 focus:outline-none focus:text-gray-600 p-1 border border-gray-300 rounded-md"
        >
          <FiMinus size={14} />
        </button>
        <span className="text-gray-700 mx-3">{quantity}</span>
        <button 
          onClick={() => updateQuantity(product.id, 1)}
          className="text-gray-500 focus:outline-none focus:text-gray-600 p-1 border border-gray-300 rounded-md"
        >
          <FiPlus size={14} />
        </button>
      </div>

      <div className="ml-6">
        <p className="text-lg font-medium text-gray-800">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>

      <button 
        onClick={() => removeItem(product.id)}
        className="ml-6 text-gray-500 hover:text-red-500 focus:outline-none"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem; 