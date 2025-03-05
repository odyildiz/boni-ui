'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navigation.css';
import boniLogo from '../../boni-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getLocalizedPath, getLocalizedText } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to={getLocalizedPath('/')}>
          <span>Bonigraphy</span>
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
        <li><Link to={getLocalizedPath('/gallery')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.gallery')}</Link></li>
        <li><Link to={getLocalizedPath('/studio')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.studio')}</Link></li>
        <li><Link to={getLocalizedPath('/bio')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.bio')}</Link></li>
        <li><Link to={getLocalizedPath('/contact')} onClick={() => setIsOpen(false)}>{getLocalizedText('nav.contact')}</Link></li>
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