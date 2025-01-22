import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Bio = () => {
  const { getLocalizedText } = useLanguage();
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">{getLocalizedText('bio.title')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
          alt="Photographer portrait"
          className="w-full h-96 object-cover"
        />
        <div>
          <p className="mb-4">
            {getLocalizedText('bio.p1')}  
          </p>
          <p className="mb-4">
            {getLocalizedText('bio.p2')}  
          </p>
          <p>
            {getLocalizedText('bio.p3')}  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;