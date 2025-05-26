"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  rating,
  category
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-100 p-4 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          style={{ objectFit: 'contain' }}
          className="max-h-40"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-indigo-500 uppercase tracking-wider mb-1">{category}</span>
        <Link href={`/product/${id}`}>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600">
            {title}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                fill={i < Math.round(rating.rate) ? 'currentColor' : 'none'}
                stroke={i < Math.round(rating.rate) ? 'currentColor' : 'currentColor'}
                size={14}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({rating.count})</span>
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">${price.toFixed(2)}</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 