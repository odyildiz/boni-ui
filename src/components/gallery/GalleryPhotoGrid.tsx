import React, { useRef } from 'react';
import GalleryPhotoCard from './GalleryPhotoCard';
import { Photo } from './types';
import useHorizontalScroll from './hooks/useHorizontalScroll';

interface GalleryPhotoGridProps {
  photos: Photo[];
  language: string;
  hasMore: boolean;
  onLoadMore: () => void;
  onPhotoClick: (photo: Photo) => void;
  getLocalizedName: (name: any) => string;
  hasTitle: boolean;
  hasDescription: boolean;
  imageStyle?: {
    containerClassName?: string;
    imageClassName?: string;
  };
}

const GalleryPhotoGrid: React.FC<GalleryPhotoGridProps> = ({
  photos,
  language,
  hasMore,
  onLoadMore,
  onPhotoClick,
  getLocalizedName,
  hasTitle,
  hasDescription,
  imageStyle
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use the custom hook for horizontal scrolling
  useHorizontalScroll({
    scrollContainerRef,
    hasMore,
    onLoadMore
  });

  return (
    <div ref={scrollContainerRef} className="flex-1 overflow-x-auto hide-scrollbar">
      <div className="inline-flex gap-4 md:gap-8 px-2 md:px-4 h-full items-center">
        {photos?.map((photo) => (
          <GalleryPhotoCard
            key={photo.id}
            photo={photo}
            onClick={() => onPhotoClick(photo)}
            getLocalizedName={getLocalizedName}
            hasTitle={hasTitle}
            hasDescription={hasDescription}
            imageStyle={imageStyle}
          />
        )) || []}
      </div>
    </div>
  );
};

export default GalleryPhotoGrid;