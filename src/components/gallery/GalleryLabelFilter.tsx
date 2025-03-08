import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Label } from './types';

interface GalleryLabelFilterProps {
  labels: Label[];
  selectedLabel: number | null;
  onLabelClick: (labelId: number) => void;
}

const GalleryLabelFilter: React.FC<GalleryLabelFilterProps> = ({ 
  labels, 
  selectedLabel, 
  onLabelClick 
}) => {
  const { language } = useLanguage();

  return (
    <div className="py-4 overflow-x-auto hide-scrollbar">
      <div className="inline-flex gap-4 px-4">
        {labels.map((label) => (
          <button
            key={label.id}
            onClick={() => onLabelClick(label.id)}
            className={`px-6 py-2 rounded-full transition-colors border ${selectedLabel === label.id
              ? 'bg-white text-black border-white'
              : 'bg-black/20 text-white hover:bg-black/40 border-gray-400/50'}`}
          >
            {language === 'en' ? label.nameEn : label.nameTr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryLabelFilter;