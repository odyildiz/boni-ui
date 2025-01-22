import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export function Payment() {
  const { getTotalPrice } = useCart();
  const { getLocalizedText } = useLanguage();
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });

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
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">{getLocalizedText('payment.nameOnCard')}</label>
          <input
            type="text"
            value={formData.cardholderName}
            onChange={e => setFormData(prev => ({ ...prev, cardholderName: e.target.value }))}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">{getLocalizedText('payment.cardNumber')}</label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={e => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">{getLocalizedText('payment.expiryDate')}</label>
            <input
              type="text"
              placeholder={getLocalizedText('payment.expiryDatePlaceHolder')}
              value={formData.expiryDate}
              onChange={e => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">{getLocalizedText('payment.cvv')}</label>
            <input
              type="text"
              value={formData.cvv}
              onChange={e => setFormData(prev => ({ ...prev, cvv: e.target.value }))}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="text-xl font-bold mb-4">
          {getLocalizedText('payment.totalAmount')}: ${getTotalPrice().toFixed(2)}
          </p>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            {getLocalizedText('payment.payNow')}
          </button>
        </div>
      </form>
    </div>
  );
} 