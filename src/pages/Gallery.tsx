import React, { useState, useEffect } from 'react';
import galleryContent from '../content/gallery-content.json';
import galleryLabelContent from '../content/gallery-label-content.json';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Gallery.css'

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const { language } = useLanguage();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
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
        if (prevPage === 0) {
          setDisplayedPhotos(newPhotos);
        } else {
          setDisplayedPhotos(prev => [...prev, ...newPhotos]);
        }
        if (end >= filteredPhotos.length) {
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

  function getLocalizedName(name: any) {
    return name[language];
  }

  const handleLabelClick = (labelId: number) => {
    setCurrentPage(0);
    setSelectedLabel(labelId === selectedLabel ? null : labelId);
    setHasMore(true);
  };

  return (
    <div className="h-screen flex flex-col px-2 md:px-4 overflow-hidden">
      <div className="py-4 overflow-x-auto hide-scrollbar">
        <div className="inline-flex gap-4 px-4">
          {galleryLabelContent.labels.filter(label => label.id != 5).map((label) => (
            <button
              key={label.id}
              onClick={() => handleLabelClick(label.id)}
              className={`px-6 py-2 rounded-full transition-colors border ${selectedLabel === label.id
                ? 'bg-white text-black border-white'
                : 'bg-black/20 text-white hover:bg-black/40 border-gray-400/50'}`}
            >
              {language === 'en' ? label.nameEn : label.nameTr}
            </button>
          ))}
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex-1 overflow-x-auto hide-scrollbar">
        <div className="inline-flex gap-4 md:gap-8 px-2 md:px-4 h-full items-center">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="min-w-[90vw] md:min-w-[300px] h-[80vh] md:h-[calc(100vh-12rem)] cursor-pointer flex-shrink-0 py-2 md:py-4"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative group h-[90%] border border-gray-200/10 rounded-lg overflow-hidden">
                <img
                  src={photo.url}
                  alt={getLocalizedName(photo.title)}
                  className="w-full h-full object-cover md:object-contain group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden flex items-center justify-center">
                  <p className="text-sm text-center">{getLocalizedName(photo.description).split(' ').slice(0, 10).join(' ')}...</p>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-center h-[10%] flex items-center justify-center text-sm md:text-base">{getLocalizedName(photo.title)}</p>
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
                alt={getLocalizedName(selectedPhoto.title)}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-80 text-white max-h-[30vh] md:max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-light mb-4">{getLocalizedName(selectedPhoto.title)}</h2>
              <p className="text-gray-300 leading-relaxed">{getLocalizedName(selectedPhoto.description)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;