"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Amazing Products at Unbeatable Prices
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Shop the latest trends in fashion, electronics, home goods and more. 
              Get exclusive deals available only on MarketHub.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" 
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Shop Now
              </Link>
              <Link href="/deals" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                Today&apos;s Deals
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform rotate-[-3deg]">
                  <Image 
                    src="/images/hero-product-1.svg" 
                    width={200} 
                    height={200}
                    alt="Featured product" 
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform rotate-[3deg]">
                  <Image 
                    src="/images/hero-product-2.svg" 
                    width={200} 
                    height={200}
                    alt="Featured product" 
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform rotate-[3deg]">
                  <Image 
                    src="/images/hero-product-3.svg" 
                    width={200} 
                    height={200}
                    alt="Featured product" 
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform rotate-[-3deg]">
                  <Image 
                    src="/images/hero-product-4.svg" 
                    width={200} 
                    height={200}
                    alt="Featured product" 
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 rounded-full px-6 py-2 font-bold transform rotate-[-5deg] shadow-lg">
                Up to 70% Off!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 