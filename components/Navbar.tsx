"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          MarketHub
        </Link>

        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex relative flex-grow mx-8 max-w-2xl">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-2 top-2 text-gray-500 hover:text-indigo-500">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/categories" className="text-gray-700 hover:text-indigo-500">
            Categories
          </Link>
          <Link href="/deals" className="text-gray-700 hover:text-indigo-500">
            Deals
          </Link>
          <Link href="/account" className="text-gray-700 hover:text-indigo-500">
            <FiUser size={20} />
          </Link>
          <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-500">
            <FiShoppingCart size={20} />
            <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className="flex items-center space-x-1 text-gray-700">
            <FiShoppingCart size={20} />
            <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="ml-2 text-gray-500 hover:text-indigo-500">
              <FiSearch size={20} />
            </button>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href="/categories" className="text-gray-700 hover:text-indigo-500">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-indigo-500">
              Deals
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-indigo-500">
              My Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 