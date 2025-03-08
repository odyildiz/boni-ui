import React from 'react';
import { Photo } from './types';

interface GalleryPhotoCardProps {
  photo: Photo;
  onClick: () => void;
  getLocalizedName: (name: any) => string;
  hasTitle: boolean;
  hasDescription: boolean;
  imageStyle?: {
    containerClassName?: string;
    imageClassName?: string;
  };
}

const GalleryPhotoCard: React.FC<GalleryPhotoCardProps> = ({ 
  photo, 
  onClick, 
  getLocalizedName,
  hasTitle,
  hasDescription,
  imageStyle
}) => {
  return (
    <div
      key={photo.id}
      className={`min-w-[90vw] md:min-w-[300px] ${imageStyle?.containerClassName || 'h-[80vh] md:h-[calc(100vh-12rem)]'} cursor-pointer flex-shrink-0 py-2 md:py-4`}
      onClick={onClick}
    >
      <div className="relative group h-[90%] border border-gray-200/10 rounded-lg overflow-hidden">
        <img
          src={photo.url}
          alt={hasTitle ? getLocalizedName(photo.title) : ''}
          className={`w-full h-full ${imageStyle?.imageClassName || 'object-cover md:object-contain'} group-hover:opacity-90 transition-opacity`}
        />
        { hasDescription && (
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden flex items-center justify-center">
          <p className="text-sm text-center">{getLocalizedName(photo.description).split(' ').slice(0, 10).join(' ')}...</p>
        </div>
    )}
      </div>
      { hasTitle && (<p className="mt-2 text-gray-600 text-center h-[10%] flex items-center justify-center text-sm md:text-base">
        { getLocalizedName(photo.title) }
      </p>)
        }
    </div>
  );
};

export default GalleryPhotoCard;