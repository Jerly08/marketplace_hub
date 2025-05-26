"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryListProps {
  categories: string[];
}

// Category images with standardized filenames (using SVG instead of JPG)
const categoryImages = {
  "electronics": "/images/categories/electronics.svg",
  "jewelery": "/images/categories/jewelry.svg",
  "men's clothing": "/images/categories/mens-clothing.svg",
  "women's clothing": "/images/categories/womens-clothing.svg",
};

// Fallback image
const defaultImage = "/images/categories/default.svg";

const formatCategoryName = (category: string) => {
  return category
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getCategoryImageUrl = (category: string) => {
  // First try to get from our mapping
  if ((categoryImages as any)[category]) {
    return (categoryImages as any)[category];
  }
  
  // If not found, create a standardized filename based on the category name
  const filename = category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
  
  return `/images/categories/${filename}.svg`;
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Shop By Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            href={`/category/${category}`} 
            key={category}
            className="group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
              <div className="relative h-48 w-full bg-gray-200">
                {/* Add error handling for missing images */}
                <Image
                  src={getCategoryImageUrl(category)}
                  alt={formatCategoryName(category)}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                  onError={(e: any) => {
                    // Fallback to default image if the category image fails to load
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <h3 className="font-semibold text-center">
                  {formatCategoryName(category)}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList; 