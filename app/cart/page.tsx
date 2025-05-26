"use client";

import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { fallbackProducts } from '../../lib/api';
import CartItem from '../../components/CartItem';
import CheckoutButton from '../../components/CheckoutButton';

// Since this is just a frontend demo, we'll use dummy data for cart items
const cartItems = [
  {
    id: 1,
    product: fallbackProducts[0],
    quantity: 1,
  },
  {
    id: 2,
    product: fallbackProducts[2],
    quantity: 2,
  },
];

export default function CartPage() {
  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = 10; // Fixed shipping cost for demo
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">Shopping Cart</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven&apos;t added any products to your cart yet.</p>
            <Link 
              href="/products" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">Cart Items ({cartItems.length})</h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.id}
                      product={item.product}
                      quantity={item.quantity}
                      // These functions would be implemented with state management in a real app
                      updateQuantity={(id, change) => console.log('Update quantity', id, change)}
                      removeItem={(id) => console.log('Remove item', id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800 font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-indigo-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <CheckoutButton onClick={() => console.log('Proceed to checkout')} />
                </div>

                <div className="mt-4">
                  <Link 
                    href="/products" 
                    className="flex items-center justify-center text-sm text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Continue Shopping</span>
                    <FiChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 