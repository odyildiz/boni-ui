import { useState } from 'react';
import galleryContent from '../content/gallery-content.json';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { getLocalizedText, language } = useLanguage();

  function getLocalizedName(name: any) {
    return name[language];
  }

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light mb-8">{getLocalizedText('nav.gallery')}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryContent.photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-square bg-gray-100 relative group">
              <img
                src={photo.url}
                alt={getLocalizedName(photo.title)}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden">
                <p className="text-sm">{getLocalizedName(photo.description).split(' ').slice(0, 10).join(' ')}...</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{getLocalizedName(photo.title)}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-7xl max-h-[90vh] flex flex-col md:flex-row gap-8 bg-white/10 p-4 md:p-8 rounded-lg w-full md:w-auto" onClick={(e) => e.stopPropagation()}>
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