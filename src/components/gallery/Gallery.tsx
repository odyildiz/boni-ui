import React, { useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useGallery } from '../../context/GalleryContext';
import GalleryLabelFilter from './GalleryLabelFilter';
import GalleryPhotoContainer from './GalleryPhotoContainer';
import { Photo, Label } from './types';

interface GalleryProps {
  photos: Photo[];
  labels: Label[];
  loadMorePhotos: () => void;
  hasMorePhotos: boolean;
  hasFilter: boolean;
  hasTitle: boolean;
  hasDescription: boolean;
  process?: string;
  excludeLabelIds?: number[];
  includeLabelIds?: number[];
  imageStyle?: {
    containerClassName?: string;
    imageClassName?: string;
  };
}

/**
 * Main Gallery component that manages the overall gallery state and functionality
 * This component is responsible for:
 * - Managing label filtering
 * - Passing filtered photos to the photo container
 * - Handling the load more functionality
 */
const Gallery: React.FC<GalleryProps> = ({
  photos,
  labels,
  loadMorePhotos,
  hasMorePhotos,
  hasFilter,
  hasTitle,
  hasDescription,
  process = 'default',
  excludeLabelIds = [],
  includeLabelIds = [],
  imageStyle
}) => {
  const { language } = useLanguage();
  const { selectedLabel, handleLabelClick, getLocalizedName } = useGallery();

  return (
    <div className="flex flex-col h-full bg-black text-white">
        {hasFilter && (
          <GalleryLabelFilter
            labels={(labels || []).filter(label => !excludeLabelIds.includes(label.id))}
            selectedLabel={selectedLabel}
            onLabelClick={handleLabelClick}
          />
        )}
      
      <GalleryPhotoContainer
        photos={photos}
        language={language}
        hasMore={hasMorePhotos}
        onLoadMore={loadMorePhotos}
        getLocalizedName={getLocalizedName}
        hasTitle={hasTitle}
        hasDescription={hasDescription}
        imageStyle={imageStyle}
      />
    </div>
  );
};

export default Gallery;