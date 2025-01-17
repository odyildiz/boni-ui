import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const menu = {
  drinks: [
    { nameKey: 'cafe.menu.items.espresso', price: 3.50 },
    { nameKey: 'cafe.menu.items.cappuccino', price: 4.50 },
    { nameKey: 'cafe.menu.items.latte', price: 4.50 },
    { nameKey: 'cafe.menu.items.americano', price: 3.50 },
    { nameKey: 'cafe.menu.items.hotChocolate', price: 4.00 }
  ],
  food: [
    { nameKey: 'cafe.menu.items.croissant', price: 3.50 },
    { nameKey: 'cafe.menu.items.chocolateMuffin', price: 3.50 },
    { nameKey: 'cafe.menu.items.avocadoToast', price: 8.50 },
    { nameKey: 'cafe.menu.items.granolaBowl', price: 7.50 }
  ]
};

const Cafe = () => {
  const { t, language } = useLanguage();

  // Convert price based on language
  const getPrice = (price: number) => {
    if (language === 'tr') {
      return (price * 30).toFixed(2); // Example conversion rate
    }
    return price.toFixed(2);
  };

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">{t('cafe.title')}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Cafe interior"
            className="w-full h-96 object-cover mb-8"
          />
          <p className="text-gray-600">
            {t('cafe.description')}
          </p>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">{t('cafe.menu.drinks')}</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{t(item.nameKey)}</span>
                <span>{t('cafe.menu.currency')}{getPrice(item.price)}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-light mb-4">{t('cafe.menu.food')}</h2>
            {menu.food.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{t(item.nameKey)}</span>
                <span>{t('cafe.menu.currency')}{getPrice(item.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;