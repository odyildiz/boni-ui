import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';

interface AddressForm {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

interface ShipmentForm {
  shipping: AddressForm;
  billing: AddressForm;
  sameAsShipping: boolean;
}

export function Shipment() {
  const navigate = useNavigate();
  const { getLocalizedText, getLocalizedPath } = useLanguage();
  const { getTotalPrice } = useCart();
  const { setShippingAddress, setBillingAddress } = useOrder();
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [formData, setFormData] = useState<ShipmentForm>({
    shipping: {
      fullName: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      phone: ''
    },
    billing: {
      fullName: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      phone: ''
    },
    sameAsShipping: true
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      shipping: {
        ...prev.shipping,
        [name]: value
      },
      billing: sameAsShipping ? {
        ...prev.billing,
        [name]: value
      } : prev.billing
    }));
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      billing: {
        ...prev.billing,
        [name]: value
      }
    }));
  };

  const handleSameAsShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setSameAsShipping(checked);
    if (checked) {
      setFormData(prev => ({
        ...prev,
        billing: { ...prev.shipping },
        sameAsShipping: true
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save shipping and billing information
    setShippingAddress(formData.shipping);
    setBillingAddress(sameAsShipping ? formData.shipping : formData.billing);
    // Navigate to payment page
    navigate(getLocalizedPath('/payment'));
  };

  const inputClassName = "w-full p-2 border rounded focus:outline-none focus:border-[#C8B6A6] transition-colors";
  const labelClassName = "block text-gray-700 mb-1";

  const renderAddressForm = (type: 'shipping' | 'billing') => {
    const isShipping = type === 'shipping';
    const handleChange = isShipping ? handleShippingChange : handleBillingChange;
    const data = formData[type];

    return (
      <div className="space-y-6">
        <div>
          <label htmlFor={`${type}.fullName`} className={labelClassName}>
            {getLocalizedText('shipment.fullName')}
          </label>
          <input
            type="text"
            id={`${type}.fullName`}
            name="fullName"
            required
            value={data.fullName}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${type}.address`} className={labelClassName}>
            {getLocalizedText('shipment.address')}
          </label>
          <input
            type="text"
            id={`${type}.address`}
            name="address"
            required
            value={data.address}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${type}.city`} className={labelClassName}>
              {getLocalizedText('shipment.city')}
            </label>
            <input
              type="text"
              id={`${type}.city`}
              name="city"
              required
              value={data.city}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor={`${type}.postalCode`} className={labelClassName}>
              {getLocalizedText('shipment.postalCode')}
            </label>
            <input
              type="text"
              id={`${type}.postalCode`}
              name="postalCode"
              required
              value={data.postalCode}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${type}.country`} className={labelClassName}>
            {getLocalizedText('shipment.country')}
          </label>
          <input
            type="text"
            id={`${type}.country`}
            name="country"
            required
            value={data.country}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${type}.phone`} className={labelClassName}>
            {getLocalizedText('shipment.phone')}
          </label>
          <input
            type="tel"
            id={`${type}.phone`}
            name="phone"
            required
            value={data.phone}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">{getLocalizedText('shipment.title')}</h2>
          {renderAddressForm('shipping')}
        </div>

        <div className="border-t pt-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={handleSameAsShippingChange}
              className="rounded border-gray-300 text-[#C8B6A6] focus:ring-[#C8B6A6]"
            />
            <span>{getLocalizedText('shipment.sameAsShipping')}</span>
          </label>
        </div>

        {!sameAsShipping && (
          <div>
            <h2 className="text-2xl font-bold mb-6">{getLocalizedText('shipment.billingTitle')}</h2>
            {renderAddressForm('billing')}
          </div>
        )}

        <div className="border-t pt-6">
          <p className="text-xl font-bold mb-4">
            {getLocalizedText('cart.total')}: ${getTotalPrice().toFixed(2)}
          </p>
          <button
            type="submit"
            className="w-full bg-[#C8B6A6] text-white py-3 rounded hover:bg-[#A4907C] transition-colors"
          >
            {getLocalizedText('shipment.proceedToPayment')}
          </button>
        </div>
      </form>
    </div>
  );
}
