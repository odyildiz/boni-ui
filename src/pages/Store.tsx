import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import CartNotification from '../components/CartNotification';
import { productApi, Product } from '../services/api';

const Store = () => {
  const { getLocalizedPath, getLocalizedText } = useLanguage();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [notification, setNotification] = useState<{ visible: boolean; productName: string; quantity: number }>({ visible: false, productName: '', quantity: 0 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getProducts();
        setProducts(data);
        setQuantities(data.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}));
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (productId: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] + delta)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id];
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setNotification({ visible: true, productName: product.name, quantity });
    setTimeout(() => {
      setNotification({ visible: false, productName: '', quantity: 0 });
    }, 5000);
  };

  if (loading) {
    return (
      <div className="pt-24 px-4 text-center">
        <p>{getLocalizedText('store.loading')}</p>
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