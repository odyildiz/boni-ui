import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import CartNotification from '../components/CartNotification';

const products = {
  '1': {
    id: 1,
    name: "Urban Shadows T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "100% organic cotton t-shirt featuring our popular Urban Shadows photograph."
  },
  '2': {
    id: 2,
    name: "City Lights T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
    description: "Premium quality t-shirt with our iconic City Lights print."
  },
  '3': {
    id: 3,
    name: "Autumn Streets Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
    description: "Set of 5 postcards featuring autumn street photography."
  },
  '4': {
    id: 4,
    name: "Winter Tales Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71",
    description: "Collection of 5 winter themed postcards."
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products[productId];
  const { addToCart } = useCart();
  const { getLocalizedText } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState<{ visible: boolean; productName: string; quantity: number }>({
    visible: false,
    productName: '',
    quantity: 0
  });

  if (!product) return <div>Product not found</div>;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    setNotification({ visible: true, productName: product.name, quantity });
    setTimeout(() => {
      setNotification({ visible: false, productName: '', quantity: 0 });
    }, 5000);
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-light mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price}</p>
          <p className="mb-8">{product.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-[#C8B6A6] text-white w-8 h-8 rounded flex items-center justify-center hover:bg-[#A4907C] transition-colors"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-[#C8B6A6] text-white w-8 h-8 rounded flex items-center justify-center hover:bg-[#A4907C] transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-[#C8B6A6] text-white px-4 py-2 rounded hover:bg-[#A4907C] transition-colors"
          >
            {getLocalizedText('product.addToCart')}
          </button>
        </div>
      </div>
      <CartNotification 
        isVisible={notification.visible} 
        productName={notification.productName}
        quantity={notification.quantity}
      />
    </div>
  );
}

export default ProductDetail;