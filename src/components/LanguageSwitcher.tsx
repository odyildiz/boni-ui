import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`language-btn ${language === 'tr' ? 'active' : ''}`}
        onClick={() => setLanguage('tr')}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher; 