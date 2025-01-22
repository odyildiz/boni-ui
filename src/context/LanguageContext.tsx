import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import translation from '../constant/translation.json';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLocalizedText: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine initial language
  const getInitialLanguage = (): Language => {
    const pathSegments = location.pathname.split('/');
    const storedLanguage = localStorage.getItem('language') as Language;
    
    if (pathSegments[1] === 'en') return 'en';
    if (storedLanguage) return storedLanguage;
    return 'tr';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  // Effect to update URL when language changes
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments.slice(1).join('/');
    
    const newPath = language === 'en' 
      ? (pathSegments[1] !== 'en' ? `/en/${currentPath}` : location.pathname)
      : currentPath.replace(/^en\//, '');

    if (newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }

    localStorage.setItem('language', language);
  }, [language, location.pathname, navigate]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const getLocalizedText = (key: string): string => {
    return translation[language][key] || key;
  };

  const getLocalizedPath = (path: string): string => {
    return language === 'en' ? `/en${path}` : path;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        getLocalizedText, 
        getLocalizedPath 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};