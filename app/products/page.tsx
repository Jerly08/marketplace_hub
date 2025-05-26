import { Suspense } from 'react';
import { getProducts, fallbackProducts } from '../../lib/api';
import ProductGrid from '../../components/ProductGrid';

export const metadata = {
  title: 'All Products - MarketHub',
  description: 'Browse all products available on MarketHub',
};

export const revalidate = 3600; // Revalidate this page at most every hour

export default async function ProductsPage() {
  const products = await getProducts();
  
  // Use fallback data if API fails
  const displayProducts = products.length > 0 ? products : fallbackProducts;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">All Products</h1>
          <p className="text-gray-600">
            Browse our collection of {displayProducts.length} products
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar filters - for a real app these would be functional */}
          <div className="w-full md:w-64 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-semibold text-lg mb-4 text-gray-800">Filters</h2>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <h3 className="font-medium mb-3 text-gray-700">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-electronics" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="cat-electronics" className="ml-2 text-sm text-gray-700">Electronics</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-jewelry" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="cat-jewelry" className="ml-2 text-sm text-gray-700">Jewelry</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-mens" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="cat-mens" className="ml-2 text-sm text-gray-700">Men's Clothing</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cat-womens" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="cat-womens" className="ml-2 text-sm text-gray-700">Women's Clothing</label>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium mb-3 text-gray-700">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <input 
                      type="number" 
                      placeholder="Min" 
                      className="w-full p-2 border border-gray-300 rounded text-sm" 
                    />
                    <span className="text-gray-500">-</span>
                    <input 
                      type="number" 
                      placeholder="Max" 
                      className="w-full p-2 border border-gray-300 rounded text-sm" 
                    />
                  </div>
                  <button className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors text-sm">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product listing */}
          <div className="flex-1">
            <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
              <ProductGrid products={displayProducts} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
} 