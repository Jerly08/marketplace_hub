import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProduct, getProducts, fallbackProducts } from '../../../lib/api';
import { FiChevronRight } from 'react-icons/fi';
import ProductActions from '../../../components/ProductActions';
import StarRating from '../../../components/StarRating';
import type { Metadata } from 'next';

export const revalidate = 3600; // Revalidate this page at most every hour

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(parseInt(params.id));
  
  if (!product) {
    return {
      title: 'Product Not Found - MarketHub',
      description: 'The requested product could not be found.',
    };
  }
  
  return {
    title: `${product.title} - MarketHub`,
    description: product.description.substring(0, 160),
  };
}

// Generate static paths for common products
export async function generateStaticParams() {
  const products = await getProducts();
  
  // Limit to first 10 products for demo purposes
  const productIds = products.slice(0, 10).map(product => ({
    id: product.id.toString(),
  }));
  
  return productIds;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = await getProduct(productId);
  
  // If product not found, show error page
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Product Not Found</h1>
        <p className="mb-8 text-gray-600">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/products" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
          Browse All Products
        </Link>
      </div>
    );
  }

  // Find related products (same category)
  const allProducts = await getProducts();
  const relatedProducts = allProducts.length > 0 
    ? allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : fallbackProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <Link href="/products" className="hover:text-indigo-600">Products</Link>
          <FiChevronRight size={16} className="mx-2" />
          <Link href={`/category/${product.category}`} className="hover:text-indigo-600">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700 truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <Image 
                src={product.image} 
                alt={product.title}
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: '400px' }}
                className="max-w-full"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-auto">
                <span className="text-sm text-indigo-600 uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
                  {product.title}
                </h1>
                
                <div className="mb-4">
                  <StarRating rating={product.rating.rate} count={product.rating.count} />
                </div>
                
                <div className="text-3xl font-bold text-gray-800 mb-6">
                  ${product.price.toFixed(2)}
                </div>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
              </div>

              <ProductActions 
                productId={product.id} 
                onAddToCart={(id) => console.log('Add to cart', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist', id)}
                onShare={(id) => console.log('Share', id)}
              />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Products</h2>
          <Suspense fallback={<div>Loading related products...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-shadow">
                    <div className="p-4 h-48 flex items-center justify-center bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={150}
                        height={150}
                        style={{
                          maxHeight: '160px',
                          objectFit: 'contain'
                        }}
                        className="max-w-full group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2 line-clamp-1 group-hover:text-indigo-600">
                        {product.title}
                      </h3>
                      <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
} 