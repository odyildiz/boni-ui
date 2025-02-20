import { useState } from 'react';

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    title: "Urban Landscape",
    description: "A stunning view of the city skyline at golden hour, showcasing modern architecture and urban planning at its finest."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
    title: "Street Life",
    description: "Capturing the vibrant energy of city streets, where diverse cultures and daily life intersect in beautiful chaos."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Nature's Path",
    description: "A serene forest trail winding through ancient trees, inviting wanderers to explore nature's hidden treasures."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Mountain View",
    description: "Majestic mountain peaks piercing through morning mist, creating a breathtaking panorama of natural beauty."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
    title: "City Nights",
    description: "The city comes alive at night with a symphony of lights, creating a magical urban landscape that never sleeps."
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Forest Walk",
    description: "A peaceful journey through the heart of the forest, where sunlight filters through the canopy in ethereal rays."
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
            <div className="aspect-square bg-gray-100 relative group">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white overflow-hidden">
                <p className="text-sm">{photo.description.split(' ').slice(0, 10).join(' ')}...</p>
              </div>
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
          <div className="max-w-7xl max-h-[90vh] flex gap-8 bg-white/10 p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex-1">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="w-80 text-white">
              <h2 className="text-2xl font-light mb-4">{selectedPhoto.title}</h2>
              <p className="text-gray-300 leading-relaxed">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;