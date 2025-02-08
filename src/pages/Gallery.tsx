import React, { useState } from 'react';

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    title: "Coffee Brewing",
    category: "cafe"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
    title: "Latte Art",
    category: "cafe"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Studio Space",
    category: "studio"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Event Setup",
    category: "events"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
    title: "Coffee Beans",
    category: "cafe"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Studio Equipment",
    category: "studio"
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'cafe', label: 'Cafe' },
  { id: 'studio', label: 'Studio' },
  { id: 'events', label: 'Events' }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light mb-8">Gallery</h1>
      
      <div className="flex gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category.id
              ? 'bg-[#C8B6A6] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-square bg-gray-100">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="mt-2 text-gray-600">{photo.title}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-7xl max-h-[90vh]">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;