import React, { useState, useCallback } from 'react';
import GalleryPhotoGrid from './GalleryPhotoGrid';
import GalleryPhotoModal from './GalleryPhotoModal';
import { Photo } from './types';

interface GalleryPhotoContainerProps {
  photos: Photo[];
  language: string;
  hasMore: boolean;
  onLoadMore: () => void;
  getLocalizedName: (name: any) => string;
  hasTitle: boolean;
  hasDescription: boolean;
  imageStyle?: {
    containerClassName?: string;
    imageClassName?: string;
  };
}

/**
 * Container component that manages photo grid and modal display
 * This separation allows for more targeted re-rendering
 */
const GalleryPhotoContainer: React.FC<GalleryPhotoContainerProps> = ({
  photos,
  language,
  hasMore,
  onLoadMore,
  getLocalizedName,
  hasTitle = true,
  hasDescription = true,
  imageStyle
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoClick = useCallback((photo: Photo) => {
    setSelectedPhoto(photo);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  return (
    <>
      <GalleryPhotoGrid
        photos={photos}
        language={language}
        hasMore={hasMore}
        onLoadMore={onLoadMore}
        onPhotoClick={handlePhotoClick}
        getLocalizedName={getLocalizedName}
        hasTitle={hasTitle}
        hasDescription={hasDescription}
        imageStyle={imageStyle}
      />

      {selectedPhoto && (
        <GalleryPhotoModal
          photo={selectedPhoto}
          onClose={handleCloseModal}
          getLocalizedName={getLocalizedName}
          hasTitle={hasTitle}
          hasDescription={hasDescription}
        />
      )}
    </>
  );
};

export default GalleryPhotoContainer;