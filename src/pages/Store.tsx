import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import CartNotification from '../components/CartNotification';

const products = [
  {
    id: 1,
    name: "Urban Shadows T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "City Lights T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01"
  },
  {
    id: 3,
    name: "Autumn Streets Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6"
  },
  {
    id: 4,
    name: "Winter Tales Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71"
  }
];

const Store = () => {
  const { getLocalizedPath, getLocalizedText } = useLanguage();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
  const [notification, setNotification] = useState<{ visible: boolean; productName: string; quantity: number }>({
    visible: false,
    productName: '',
    quantity: 0
  });

  const handleQuantityChange = (productId: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] + delta)
    }));
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const quantity = quantities[product.id];
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setNotification({ visible: true, productName: product.name, quantity });
    setTimeout(() => {
      setNotification({ visible: false, productName: '', quantity: 0 });
    }, 5000);
  };

  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <Link 
              to={getLocalizedPath(`/store/${product.id}`)}
              className="block"
            >
              <div className="bg-gray-100 aspect-square mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-light group-hover:text-gray-600">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center border border-[#C8B6A6] rounded">
                <button
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="px-2 py-1 text-[#C8B6A6] hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-1 text-gray-700 border-x border-[#C8B6A6]">
                  {quantities[product.id]}
                </span>
                <button
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="px-2 py-1 text-[#C8B6A6] hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex-1 bg-[#C8B6A6] text-white py-2 px-4 rounded hover:bg-[#A4907C] transition-colors"
              >
                {getLocalizedText('store.addToCart')}  
              </button>
            </div>
          </div>
        ))}
      </div>
      <CartNotification 
        isVisible={notification.visible} 
        productName={notification.productName}
        quantity={notification.quantity}
      />
    </div>
  );
}

export default Store;