import React, { createContext, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import translation from '../constant/translation.json';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLocalizedText: (key: string) => string;
  getLocalizedPath: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize language based on URL
  const [language, setLanguage] = useState<Language>(() => {
    const pathSegments = location.pathname.split('/');
    if (pathSegments[1] === 'en') {
      return 'en';
    }
    return 'tr';
  });

  const handleSetLanguage = (lang: Language) => {
    const pathSegments = location.pathname.split('/');
    
    if (lang === 'en') {
      // Add 'en' prefix for English
      if (pathSegments[1] !== 'en') {
        const newPath = `/en${location.pathname}`;
        navigate(newPath);
      }
    } else {
      // Remove 'en' prefix for Turkish
      if (pathSegments[1] === 'en') {
        const newPath = location.pathname.replace('/en', '');
        navigate(newPath);
      }
    }
    
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const getLocalizedText = (key: string): string => {
    return translation[language][key] || key;
  };

  const getLocalizedPath = (path: string) => {
    return language === 'en' ? `/en${path}` : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, getLocalizedText, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 