import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Cart() {
  const { items, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 border p-4 rounded">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <button
              onClick={() => navigate('/payment')}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
            >
              {t('cart.checkout')}
            </button>
          </div>
        </>
      )}
    </div>
  );
} 