'use client'

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Photography Studio
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/bio" className="hover:text-gray-600">Bio</Link>
            <Link to="/store" className="hover:text-gray-600">Store</Link>
            <Link to="/gallery" className="hover:text-gray-600">Gallery</Link>
            <Link to="/cafe" className="hover:text-gray-600">Cafe</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
            <Link to="/cart" className="relative hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 