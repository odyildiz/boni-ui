import React, { useRef, useState, useCallback } from 'react';
import GalleryPhotoCard from './GalleryPhotoCard';
import { Photo } from './types';
import useHorizontalScroll from './hooks/useHorizontalScroll';
import ScrollIndicator from './ScrollIndicator';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use the custom hook for horizontal scrolling
  useHorizontalScroll({
    scrollContainerRef,
    hasMore,
    onLoadMore
  });

  const navigateToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      
      // Scroll to the previous photo
      const container = scrollContainerRef.current;
      const photoElements = container?.querySelectorAll('.photo-card');
      if (container && photoElements && photoElements[newIndex]) {
        photoElements[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  const navigateToNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      
      // Scroll to the next photo
      const container = scrollContainerRef.current;
      const photoElements = container?.querySelectorAll('.photo-card');
      if (container && photoElements && photoElements[newIndex]) {
        photoElements[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      
      // Load more photos if we're near the end
      if (newIndex >= photos.length - 3 && hasMore) {
        onLoadMore();
      }
    }
  }, [currentIndex, photos.length, hasMore, onLoadMore]);

  return (
    <div className="relative flex-1">
      <div 
        ref={scrollContainerRef} 
        className="flex-1 overflow-x-auto hide-scrollbar h-full"
      >
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
      <ScrollIndicator 
        scrollContainerRef={scrollContainerRef} 
        onPrevious={navigateToPrevious} 
        onNext={navigateToNext} 
      />
    </div>
  );
};

export default GalleryPhotoGrid;