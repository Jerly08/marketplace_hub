"use client";

import React from 'react';
import { FiStar } from 'react-icons/fi';

interface StarRatingProps {
  rating: number;
  count: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, count }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center text-yellow-400 mr-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            className="mr-1"
            fill={i < Math.round(rating) ? 'currentColor' : 'none'}
            stroke={'currentColor'}
            size={16}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">{rating} ({count} reviews)</span>
    </div>
  );
};

export default StarRating; 