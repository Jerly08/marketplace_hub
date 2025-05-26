import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MarketHub</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop marketplace for all your shopping needs. Find the best deals on quality products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
              <li><Link href="/deals" className="text-gray-300 hover:text-white">Deals & Promotions</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-300 hover:text-white">New Arrivals</Link></li>
              <li><Link href="/best-sellers" className="text-gray-300 hover:text-white">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MarketHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 