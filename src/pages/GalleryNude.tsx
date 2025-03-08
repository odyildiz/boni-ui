import React, { useEffect } from 'react';
import galleryLabelContent from '../content/gallery-label-content.json';
import '../styles/Gallery.css';
import Gallery from '../components/gallery/Gallery';
import { useGallery } from '../context/GalleryContext';

const GalleryNude = () => {
  const { displayedPhotos, hasMore, loadMorePhotos, handleLabelClick } = useGallery();

  useEffect(() => {
    handleLabelClick(5); // 5 is the ID of the "nude" label
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Gallery 
        photos={displayedPhotos}
        labels={galleryLabelContent.labels}
        loadMorePhotos={loadMorePhotos}
        hasMorePhotos={hasMore}
        hasFilter={false}
        hasTitle={false}
        hasDescription={false}
        process="nude"
        includeLabelIds={[5]} // Only include nude photos
        imageStyle={{
          containerClassName: 'h-screen',
          imageClassName: 'object-contain'
        }}
      />
    </div>
  );
}

export default GalleryNude;