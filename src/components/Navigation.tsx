'use client'

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navigation.css';
import boniLogo from '../media/boni-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const { getLocalizedPath, getLocalizedText, language } = useLanguage();
  const location = useLocation();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to={getLocalizedPath('/')}>
          <img src={boniLogo} alt="Boni Cafe & Studio" className="h-8 mr-2" />
          <span>Boni Cafe & Studio</span>
        </Link>
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to={getLocalizedPath('/')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.home')}</Link></li>
        <li><Link to={getLocalizedPath('/cafe')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.cafe')}</Link></li>
        <li><Link to={getLocalizedPath('/store')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.store')}</Link></li>
        <li><Link to={getLocalizedPath('/bio')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.bio')}</Link></li>
        <li><Link to={getLocalizedPath('/contact')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.contact')}</Link></li>
        <li className="cart-link">
          <Link to={getLocalizedPath('/cart')} onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cart-icon"
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
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </li>
        <li className="instagram-link">
          <a
            href="https://www.instagram.com/boniyeldegirmeni/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Instagram className="instagram-icon" />
          </a>
        </li>
        <li className="language-switcher-container">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 