import React, { useState, useEffect } from 'react';
import galleryContent from '../content/gallery-content.json';
import '../styles/Gallery.css'

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const photosPerPage = 3;

  useEffect(() => {
    loadMorePhotos();
  }, []);

  const loadMorePhotos = () => {
    setCurrentPage(prevPage => {
      const start = prevPage * photosPerPage;
      const end = start + photosPerPage;
      const newPhotos = galleryContent.photos.slice(start, end);

      if (newPhotos.length > 0) {
        setDisplayedPhotos(prev => [...prev, ...newPhotos]);
        if (end >= galleryContent.photos.length) {
          setHasMore(false);
        }
        return prevPage + 1;
      }
      return prevPage;
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollWidth - (scrollLeft + clientWidth) < 300 && hasMore) {
        loadMorePhotos();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      container.scrollLeft += e.deltaY;
      handleScroll();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div ref={scrollContainerRef} className="flex-1 overflow-x-auto hide-scrollbar">
        <div className="inline-flex gap-4 md:gap-8 px-2 md:px-4 h-full items-center">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="min-w-[90vw] md:min-w-[300px] h-[80vh] md:h-full cursor-pointer flex-shrink-0 py-2 md:py-4"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative group h-full">
                <img
                  src={photo.url}
                  className="w-full h-full object-cover md:object-contain group-hover:opacity-90 transition-opacity rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-7xl max-h-[90vh] flex flex-col md:flex-row gap-8 bg-white/5 p-4 md:p-8 rounded-lg w-full md:w-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex-1 min-h-0">
              <img
                src={selectedPhoto.url}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;