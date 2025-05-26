import { Suspense } from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { getProducts, fallbackProducts } from '../../lib/api';
import ProductGrid from '../../components/ProductGrid';

export const metadata = {
  title: 'Special Deals - MarketHub',
  description: 'Shop amazing deals and special offers on MarketHub.',
};

export default async function DealsPage() {
  const products = await getProducts();
  
  // For demo purposes, let's simulate that deals are products with a rating > 4.3
  // In a real app, deals would be determined by the backend
  const dealProducts = (products.length > 0 ? products : fallbackProducts)
    .filter(product => product.rating.rate > 4.3);
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">Special Deals</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Special Deals</h1>
          <p className="text-gray-600">
            Limited time offers on our top-rated products
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-2">Save up to 50% off!</h2>
          <p className="opacity-90 mb-4">Special deals for a limited time only. Don't miss out!</p>
        </div>

        <Suspense fallback={<div className="text-center py-10">Loading deals...</div>}>
          <ProductGrid products={dealProducts} title="Featured Deals" />
        </Suspense>
      </div>
    </div>
  );
} 