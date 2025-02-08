import React from 'react';
import { useLanguage } from '../context/LanguageContext';

/*

const studioSpaces = [
  {
    id: 1,
    name: 'Main Studio',
    description: 'A versatile space perfect for photography and small events',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    size: '50m²',
    features: ['Natural lighting', 'Professional lighting setup', 'Sound system', 'Backdrop system']
  },
  {
    id: 2,
    name: 'Recording Room',
    description: 'Soundproofed space ideal for podcasts and voice recording',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    size: '20m²',
    features: ['Soundproofing', 'Recording equipment', 'Mixing console', 'Comfortable seating']
  },
  {
    id: 3,
    name: 'Workshop Area',
    description: 'Creative space for workshops and group activities',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    size: '40m²',
    features: ['Flexible seating', 'Projector', 'Whiteboard', 'Art supplies']
  }
];

const Studio = () => {
  const { getLocalizedText } = useLanguage();

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light mb-8">Studio Spaces</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {studioSpaces.map((space) => (
          <div key={space.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video">
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
              <p className="text-gray-600 mb-4">{space.description}</p>
              <p className="text-sm text-gray-500 mb-4">Size: {space.size}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {space.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-light mb-4">Booking Information</h2>
        <p className="text-gray-600 mb-4">
          Our studio spaces are available for hourly, half-day, or full-day bookings.
          Each space comes fully equipped with the listed features and our staff is
          available to assist with setup and technical requirements.
        </p>
        <button className="bg-[#C8B6A6] text-white px-6 py-2 rounded hover:bg-[#A4907C] transition-colors">
          Contact for Booking
        </button>
      </div>
    </div>
  );
};
*/

const Studio = () => {
    const { getLocalizedText } = useLanguage();
    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d")',
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl font-light mb-4">{getLocalizedText('coming.soon')}</h1>
        </div>
      </div>
    );
  }

export default Studio;