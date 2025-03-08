import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import galleryContent from '../content/gallery-content.json';
import galleryLabelContent from '../content/gallery-label-content.json';
import { Photo, Label } from '../components/gallery/types';
import { useLanguage } from './LanguageContext';

interface GalleryContextType {
  displayedPhotos: Photo[];
  selectedPhoto: Photo | null;
  selectedLabel: number | null;
  hasMore: boolean;
  labels: Label[];
  loadMorePhotos: () => void;
  handleLabelClick: (labelId: number | null) => void;
  handlePhotoClick: (photo: Photo) => void;
  closePhotoModal: () => void;
  getLocalizedName: (name: any) => string;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

interface GalleryProviderProps {
  children: ReactNode;
}

export const GalleryProvider: React.FC<GalleryProviderProps> = ({ children }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState<number | null>(null);
  const { language } = useLanguage();
  const photosPerPage = 3;
  
  useEffect(() => {
    loadMorePhotos();
  }, [selectedLabel]);
  
  const loadMorePhotos = () => {
    setCurrentPage(prevPage => {
      const start = prevPage * photosPerPage;
      const end = start + photosPerPage;
      const filteredPhotos = galleryContent.photos.filter(photo => {
        const onlyNude = photo.labelIds.length == 1 && photo.labelIds.includes(5);
        return !onlyNude && (selectedLabel
          ? photo.labelIds.includes(selectedLabel)
          : true);
      });
      const newPhotos = filteredPhotos.slice(start, end);

      if (newPhotos.length > 0) {
        setDisplayedPhotos(prevPage === 0 ? newPhotos : prev => [...prev, ...newPhotos]);
        setHasMore(end < filteredPhotos.length);
        return prevPage + 1;
      } else if (filteredPhotos.length === 0) {
        setDisplayedPhotos([]);
      } else if (newPhotos.length === 0 && selectedLabel) {
        setHasMore(false);
      } 
      return prevPage;
    });
  };

  const getLocalizedName = (name: any) => {
    return name[language];
  };

  const handleLabelClick = (labelId: number | null) => {
    setCurrentPage(0);
    setHasMore(true);
    setSelectedLabel(labelId === selectedLabel ? null : labelId);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const value = {
    displayedPhotos,
    selectedPhoto,
    selectedLabel,
    hasMore,
    labels: galleryLabelContent.labels,
    loadMorePhotos,
    handleLabelClick,
    handlePhotoClick,
    closePhotoModal,
    getLocalizedName
  };

  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  );
};