import { Suspense } from 'react';
import Image from 'next/image';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import CategoryList from '../components/CategoryList';
import { getProducts, getCategories, fallbackProducts } from '../lib/api';

export const revalidate = 3600; // Revalidate data at most every hour

export default async function Home() {
  // Fetch data in parallel
  const [productsData, categoriesData] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Use fallback data if API fails
  const products = productsData.length > 0 ? productsData : fallbackProducts;
  const categories = categoriesData.length > 0 ? categoriesData : [
    "electronics", "jewelery", "men's clothing", "women's clothing"
  ];
  
  // Get featured products (top rated products)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 8);
  
  // Get new arrivals (just take the latest 4 products for demo)
  const newArrivals = [...products].slice(0, 4);
  
  return (
    <div className="min-h-screen">
      <HeroBanner />
      
      {/* Categories Section */}
      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoryList categories={categories} />
      </Suspense>
      
      {/* Featured Products */}
      <section className="bg-white py-12">
        <Suspense fallback={<div>Loading featured products...</div>}>
          <ProductGrid products={featuredProducts} title="Featured Products" />
        </Suspense>
      </section>
      
      {/* New Arrivals */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">New Arrivals</h2>
          <Suspense fallback={<div>Loading new arrivals...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow p-4">
                  <div className="h-40 relative mb-4 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                      style={{
                        maxHeight: '160px',
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <h3 className="font-medium text-gray-800 line-clamp-1">{product.title}</h3>
                  <p className="text-indigo-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </Suspense>
          
          <div className="text-center mt-10">
            <a
              href="/products"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates on new products, special offers, and discount codes.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
