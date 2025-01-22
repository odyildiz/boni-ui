import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

function Payment() {
  const navigate = useNavigate();
  const { getLocalizedText, getLocalizedPath } = useLanguage();
  const { items, getTotalPrice } = useCart();
  const { shippingAddress, billingAddress } = useOrder();
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });

  const renderAddress = (address: any) => {
    if (!address) return null;
    return (
      <div className="text-sm">
        <p className="font-medium">{address.fullName}</p>
        <p>{address.address}</p>
        <p>{address.city}, {address.postalCode}</p>
        <p>{address.country}</p>
        <p>{address.phone}</p>
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('your-api-endpoint/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          amount: getTotalPrice(),
        }),
      });

      if (response.ok) {
        alert('Payment successful!');
        // Handle successful payment (clear cart, redirect, etc.)
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 lg:space-y-0">
        {/* Payment Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-6">{getLocalizedText('payment.title')}</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-gray-700 mb-1">
                {getLocalizedText('payment.cardNumber')}
              </label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={e => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
                className="w-full p-2 border rounded focus:outline-none focus:border-[#C8B6A6]"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 mb-1">
                  {getLocalizedText('payment.expiryDate')}
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={e => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                  className="w-full p-2 border rounded focus:outline-none focus:border-[#C8B6A6]"
                  placeholder={getLocalizedText('payment.expiryDatePlaceHolder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 mb-1">
                  {getLocalizedText('payment.cvv')}
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={formData.cvv}
                  onChange={e => setFormData(prev => ({ ...prev, cvv: e.target.value }))}
                  className="w-full p-2 border rounded focus:outline-none focus:border-[#C8B6A6]"
                  placeholder="123"
                  required
                />
              </div>
              <div>
                <label htmlFor="cardholderName" className="block text-gray-700 mb-1">
                  {getLocalizedText('payment.nameOnCard')}
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  value={formData.cardholderName}
                  onChange={e => setFormData(prev => ({ ...prev, cardholderName: e.target.value }))}
                  className="w-full p-2 border rounded focus:outline-none focus:border-[#C8B6A6]"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#C8B6A6] text-white py-3 rounded hover:bg-[#A4907C] transition-colors"
            >
              {getLocalizedText('payment.payNow')}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6">{getLocalizedText('payment.summary')}</h2>
          
          {/* Cart Summary */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">{getLocalizedText('payment.cartSummary')}</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 font-bold">
                <div className="flex justify-between">
                  <span>{getLocalizedText('cart.total')}</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">{getLocalizedText('payment.shippingAddress')}</h3>
            {renderAddress(shippingAddress)}
          </div>

          {/* Billing Address */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">{getLocalizedText('payment.billingAddress')}</h3>
            {renderAddress(billingAddress)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;