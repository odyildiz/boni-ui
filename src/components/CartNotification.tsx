import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface CartNotificationProps {
  isVisible: boolean;
  productName: string;
}

const CartNotification: React.FC<CartNotificationProps> = ({ isVisible, productName }) => {
  const { getLocalizedPath, getLocalizedText } = useLanguage();
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-[#C8B6A6] text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in">
      <p className="mb-2">{productName} {getLocalizedText('cartNotification.addedToCart')}</p>
      <Link 
        to={getLocalizedPath('/cart')} 
        className="text-sm underline hover:text-gray-200"
      >
        {getLocalizedText('cartNotification.viewCart')}
      </Link>
    </div>
  );
};

export default CartNotification;
