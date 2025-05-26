import { Suspense } from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { getProductsByCategory, getCategories } from '../../../lib/api';
import ProductGrid from '../../../components/ProductGrid';
import type { Metadata } from 'next';

export const revalidate = 3600; // Revalidate this page at most every hour

// Format category name for display
const formatCategoryName = (category: string) => {
  return category
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Define the params type for this page
type CategoryParams = {
  params: {
    category: string;
  };
};

// Generate metadata for the page
export async function generateMetadata(
  { params }: CategoryParams
): Promise<Metadata> {
  const categoryName = params.category;
  const formattedName = formatCategoryName(categoryName);
  
  return {
    title: `${formattedName} - MarketHub`,
    description: `Browse our selection of ${formattedName.toLowerCase()} products on MarketHub.`,
  };
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const categories = await getCategories();
  
  return categories.map(category => ({
    category: category,
  }));
}

export default async function CategoryPage(
  { params }: CategoryParams
) {
  const categoryName = params.category;
  const products = await getProductsByCategory(categoryName);
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <Link href="/products" className="hover:text-indigo-600">Products</Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">{formatCategoryName(categoryName)}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {formatCategoryName(categoryName)}
          </h1>
          <p className="text-gray-600">
            Browse our selection of {products.length} {categoryName.toLowerCase()} products
          </p>
        </div>

        {/* Product Grid */}
        <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
          <ProductGrid products={products} />
        </Suspense>
      </div>
    </div>
  );
} 