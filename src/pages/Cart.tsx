import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, emptyCart } = useCart();
  const navigate = useNavigate();
  const { getLocalizedText, getLocalizedPath } = useLanguage();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{getLocalizedText('cart.title')}</h1>
      </div>
      
      {items.length === 0 ? (
        <p>{getLocalizedText('cart.empty')}</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 border p-4 rounded">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-lg">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border border-[#C8B6A6] rounded">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-[#C8B6A6] hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-gray-700 border-x border-[#C8B6A6]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-[#C8B6A6] hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  >
                    {getLocalizedText('cart.remove')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-xl font-bold mb-4">
              {getLocalizedText('cart.total')}: ${getTotalPrice().toFixed(2)}
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => navigate(getLocalizedPath('/shipment'))}
                className="bg-[#C8B6A6] text-white px-8 py-2 rounded hover:bg-[#A4907C] transition-colors"
              >
                {getLocalizedText('cart.proceedToShipment')}
              </button>
              <button
                onClick={emptyCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                {getLocalizedText('cart.emptyCart')}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;