import React from 'react';
import { Photo } from './types';
import { IoClose } from 'react-icons/io5';

interface GalleryPhotoModalProps {
  photo: Photo;
  onClose: () => void;
  getLocalizedName: (name: any) => string;
  hasTitle: boolean;
  hasDescription: boolean;
}

const GalleryPhotoModal: React.FC<GalleryPhotoModalProps> = ({ 
  photo, 
  onClose, 
  getLocalizedName,
  hasTitle,
  hasDescription
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="max-w-7xl max-h-[90vh] flex flex-col md:flex-row bg-white/5 p-0 rounded-lg w-full md:w-auto relative" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-2 right-2 z-10 text-white bg-black/50 rounded-full p-1 hover:bg-black/80 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img
            src={photo.url}
            alt={hasTitle ? getLocalizedName(photo.title) : ''}
            className="w-full h-full object-contain"
          />
        </div>
        { (hasDescription || hasTitle) && (
        <div className="w-full md:w-80 text-white max-h-[30vh] md:max-h-[80vh] overflow-auto p-4 md:p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-light mb-4">{hasTitle ? getLocalizedName(photo.title) : ''}</h2>
          <p className="text-gray-300 leading-relaxed">{hasDescription ? getLocalizedName(photo.description) : ''}</p>
        </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPhotoModal;