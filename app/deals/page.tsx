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
  const productsData = await getProducts();
  
  // For demo purposes, let's simulate that deals are products with a rating > 4.3
  const products = productsData.length > 0 
    ? productsData.filter(product => product.rating.rate > 4.3)
    : fallbackProducts.filter(product => product.rating.rate > 4.3);
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">Special Deals</span>
        </nav>
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg p-6 md:p-10 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Special Deals & Offers
          </h1>
          <p className="opacity-90 mb-4">Special deals for a limited time only. Don&apos;t miss out!</p>
          <Link 
            href="/products" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded-md font-semibold inline-block"
          >
            View All Products
          </Link>
        </div>
        
        {/* Products */}
        <Suspense fallback={<div>Loading deals...</div>}>
          <ProductGrid products={products} title="Our Best Deals" />
        </Suspense>
      </div>
    </div>
  );
} 