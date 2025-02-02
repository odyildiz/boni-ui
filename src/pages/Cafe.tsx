import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { menuApi, MenuItem } from '../services/api';

const Cafe = () => {
  const { getLocalizedText, language } = useLanguage();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await menuApi.getMenuItems();
        setMenuItems(data);
      } catch (err) {
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Convert price based on language
  const getPrice = (price: number) => {
    if (language === 'tr') {
      return (price * 30).toFixed(2); // Example conversion rate
    }
    return price.toFixed(2);
  };

  if (loading) {
    return (
      <div className="pt-24 px-4 text-center">
        <p>{getLocalizedText('cafe.loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 px-4 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  const drinks = menuItems.filter(item => item.category === 'drinks');
  const food = menuItems.filter(item => item.category === 'food');

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">{getLocalizedText('cafe.title')}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Cafe interior"
            className="w-full h-96 object-cover mb-8"
          />
          <p className="text-gray-600">
            {getLocalizedText('cafe.description')}
          </p>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('cafe.menu.drinks')}</h2>
            {drinks.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{getLocalizedText('cafe.menu.currency')}{getPrice(item.price)}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('cafe.menu.food')}</h2>
            {food.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{getLocalizedText('cafe.menu.currency')}{getPrice(item.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;