import React, { useEffect } from 'react';
import galleryLabelContent from '../content/gallery-label-content.json';
import '../styles/Gallery.css';
import Gallery from '../components/gallery/Gallery';
import { useGallery } from '../context/GalleryContext';

const GalleryPage = () => {
  const { displayedPhotos, hasMore, loadMorePhotos, handleLabelClick } = useGallery();

  useEffect(() => {
    handleLabelClick(null); // 5 is the ID of the "nude" label
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Gallery 
        photos={displayedPhotos}
        labels={galleryLabelContent.labels}
        loadMorePhotos={loadMorePhotos}
        hasMorePhotos={hasMore}
        hasFilter={true}
        hasTitle={true}
        hasDescription={true}
        process="gallery"
        excludeLabelIds={[5]} // Exclude nude photos from regular gallery
        imageStyle={{
          containerClassName: 'h-[80vh] md:h-[calc(100vh-12rem)]',
          imageClassName: 'object-cover md:object-contain'
        }}
      />
    </div>
  );
}

export default GalleryPage;