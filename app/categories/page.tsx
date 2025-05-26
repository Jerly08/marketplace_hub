import { Suspense } from 'react';
import { getCategories } from '../../lib/api';
import CategoryList from '../../components/CategoryList';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export const metadata = {
  title: 'All Categories - MarketHub',
  description: 'Browse all product categories on MarketHub.',
};

export default async function CategoriesPage() {
  const categoriesData = await getCategories();
  
  const categories = categoriesData.length > 0 ? categoriesData : [
    "electronics", "jewelery", "men's clothing", "women's clothing"
  ];
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <FiChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">Categories</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Categories</h1>
        
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoryList categories={categories} />
        </Suspense>
      </div>
    </div>
  );
} 