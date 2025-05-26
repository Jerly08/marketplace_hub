"use client";

import Link from 'next/link';
import { FiChevronRight, FiUser, FiShoppingBag, FiHeart, FiSettings } from 'react-icons/fi';
import { useState } from 'react';

// Create this client component separately for the account page
const AccountTabs = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="border-b border-gray-200">
        <div className="flex -mb-px">
          <button
            className={`mr-8 py-4 px-1 ${activeTab === 'profile' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            <div className="flex items-center">
              <FiUser className="mr-2" />
              <span>Profile</span>
            </div>
          </button>
          <button
            className={`mr-8 py-4 px-1 ${activeTab === 'orders' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
            onClick={() => setActiveTab('orders')}
          >
            <div className="flex items-center">
              <FiShoppingBag className="mr-2" />
              <span>Orders</span>
            </div>
          </button>
          <button
            className={`mr-8 py-4 px-1 ${activeTab === 'wishlist' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
            onClick={() => setActiveTab('wishlist')}
          >
            <div className="flex items-center">
              <FiHeart className="mr-2" />
              <span>Wishlist</span>
            </div>
          </button>
          <button
            className={`mr-8 py-4 px-1 ${activeTab === 'settings' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
            onClick={() => setActiveTab('settings')}
          >
            <div className="flex items-center">
              <FiSettings className="mr-2" />
              <span>Settings</span>
            </div>
          </button>
        </div>
      </div>

      <div className="py-6">
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <FiUser size={40} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">John Doe</h3>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-6">
              <h4 className="text-lg font-medium mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    value="John Doe"
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value="john.doe@example.com"
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">You have no orders yet.</p>
            <Link
              href="/products"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
            <Link
              href="/products"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Browse Products
            </Link>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Email Notifications</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="notify-orders" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="notify-orders" className="ml-2 text-gray-700">Order updates</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="notify-deals" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="notify-deals" className="ml-2 text-gray-700">Deals and promotions</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function AccountPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">My Account</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>
        
        <AccountTabs />
      </div>
    </div>
  );
} 