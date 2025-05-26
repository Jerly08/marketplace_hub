import { Suspense } from 'react';
import { getProducts, fallbackProducts } from '../../lib/api';
import ProductGrid from '../../components/ProductGrid';

export const metadata = {
  title: 'All Products - MarketHub',
  description: 'Browse all products available on MarketHub',
};

export const revalidate = 3600; // Revalidate this page at most every hour

export default async function ProductsPage() {
  const productsData = await getProducts();
  const products = productsData.length > 0 ? productsData : fallbackProducts;
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - In a real app, these would be functional */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="cat-all" 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      defaultChecked
                    />
                    <label htmlFor="cat-all" className="ml-2 text-sm text-gray-700">All Categories</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="cat-electronics" 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="cat-electronics" className="ml-2 text-sm text-gray-700">Electronics</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="cat-jewelery" 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="cat-jewelery" className="ml-2 text-sm text-gray-700">Jewelry</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="cat-mens" 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="cat-mens" className="ml-2 text-sm text-gray-700">Men&apos;s Clothing</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="cat-womens" 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="cat-womens" className="ml-2 text-sm text-gray-700">Women&apos;s Clothing</label>
                  </div>
                </div>
              </div>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="min-price" className="block text-xs text-gray-500 mb-1">Min Price</label>
                      <input 
                        type="number" 
                        id="min-price" 
                        placeholder="$0" 
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="block text-xs text-gray-500 mb-1">Max Price</label>
                      <input 
                        type="number" 
                        id="max-price" 
                        placeholder="$1000" 
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductGrid products={products} showFilters={false} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
} 