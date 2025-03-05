import React, { useState, useEffect } from 'react';
import galleryContent from '../content/gallery-content.json';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { language } = useLanguage();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  function getLocalizedName(name: any) {
    return name[language];
  }

  return (
    <div className="h-screen flex flex-col px-4 overflow-hidden">
      <div ref={scrollContainerRef} className="flex-1 overflow-x-auto hide-scrollbar">
        <div className="inline-flex gap-8 px-4 h-full items-center">
          {galleryContent.photos.map((photo) => (
            <div
              key={photo.id}
              className="min-w-[300px] h-[calc(100vh-12rem)] cursor-pointer flex-shrink-0"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative group h-[90%]">
                <img
                  src={photo.url}
                  alt={getLocalizedName(photo.title)}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity rounded-lg"
                />
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden flex items-center justify-center rounded-lg">
                  <p className="text-sm text-center">{getLocalizedName(photo.description).split(' ').slice(0, 10).join(' ')}...</p>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-center h-[10%] flex items-center justify-center">{getLocalizedName(photo.title)}</p>
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

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Gallery;