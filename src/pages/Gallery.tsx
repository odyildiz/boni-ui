import React, { useState } from 'react';

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    title: "Urban Landscape"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
    title: "Street Life"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Nature's Path"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Mountain View"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
    title: "City Nights"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Forest Walk"
  }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light mb-8">Gallery</h1>
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