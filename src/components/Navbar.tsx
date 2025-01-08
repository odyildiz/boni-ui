import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Photography Studio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/bio" className="hover:text-gray-600">Bio</Link>
            <Link to="/store" className="hover:text-gray-600">Store</Link>
            <Link to="/gallery" className="hover:text-gray-600">Gallery</Link>
            <Link to="/cafe" className="hover:text-gray-600">Cafe</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          </div>
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
    </nav>
  );
}

export default Navbar;