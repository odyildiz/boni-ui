import { useState } from 'react';
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

const emptyAddress: AddressForm = {
  fullName: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  phone: ''
};

interface ShipmentForm {
  shipping: AddressForm;
  billing: AddressForm;
  sameAsShipping: boolean;
  addressName: string;
}

const initialFormData: ShipmentForm = {
  shipping: { ...emptyAddress },
  billing: { ...emptyAddress },
  sameAsShipping: true,
  addressName: ''
};

export function Shipment() {
  const navigate = useNavigate();
  const { getLocalizedText, getLocalizedPath } = useLanguage();
  const { getTotalPrice } = useCart();
  const { 
    setShippingAddress, 
    setBillingAddress, 
    savedAddresses, 
    saveAddress, 
    updateAddress,
    deleteAddress, 
    useAddress 
  } = useOrder();
  
  const [isEditing, setIsEditing] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [formData, setFormData] = useState<ShipmentForm>({
    shipping: { ...emptyAddress },
    billing: { ...emptyAddress },
    sameAsShipping: true,
    addressName: ''
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEditing) return;
    
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      shipping: {
        ...prev.shipping,
        [name]: value
      },
      billing: sameAsShipping ? {
        ...prev.shipping,
        [name]: value
      } : prev.billing
    }));
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEditing) return;
    
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
    } else {
      setFormData(prev => ({
        ...prev,
        billing: { ...emptyAddress },
        sameAsShipping: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      if (selectedAddressId) {
        // Update existing address
        updateAddress(
          selectedAddressId, 
          formData.addressName, 
          formData.shipping,
          sameAsShipping ? formData.shipping : formData.billing,
          sameAsShipping
        );
        setShippingAddress(formData.shipping);
        setBillingAddress(sameAsShipping ? formData.shipping : formData.billing);
      } else {
        // Save new address
        if (formData.addressName.trim()) {
          const savedAdress =saveAddress(
            formData.addressName.trim(), 
            formData.shipping,
            sameAsShipping ? formData.shipping : formData.billing,
            sameAsShipping
          );
          
          // Set the newly saved address as the current shipping and billing address
          setSelectedAddressId(savedAdress.id);
          setShippingAddress(formData.shipping);
          setBillingAddress(sameAsShipping ? formData.shipping : formData.billing);
        }
      }
      setIsEditing(false);
    } else {
      // Proceed to payment with selected address
      const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);
      if (selectedAddress) {
        setShippingAddress(selectedAddress.shipping);
        setBillingAddress(selectedAddress.sameAsShipping ? selectedAddress.shipping : selectedAddress.billing);
        navigate(getLocalizedPath('/payment'));
      }
    }
  };

  const handleUseAddress = (savedAddress: any) => {
    setSelectedAddressId(savedAddress.id);
    setIsEditing(false);
    useAddress(savedAddress);
    setSameAsShipping(savedAddress.sameAsShipping);
    setFormData({
      shipping: { ...savedAddress.shipping },
      billing: savedAddress.sameAsShipping ? { ...savedAddress.shipping } : { ...savedAddress.billing },
      addressName: savedAddress.name,
      sameAsShipping: savedAddress.sameAsShipping
    });
  };

  const handleEditAddress = (savedAddress: any) => {
    setIsEditing(true);
    setSelectedAddressId(savedAddress.id);
    setSameAsShipping(savedAddress.sameAsShipping);
    setFormData({
      shipping: { ...savedAddress.shipping },
      billing: savedAddress.sameAsShipping ? { ...savedAddress.shipping } : { ...savedAddress.billing },
      addressName: savedAddress.name,
      sameAsShipping: savedAddress.sameAsShipping
    });
  };

  const handleAddNewAddress = () => {
    setIsEditing(true);
    setSelectedAddressId(null);
    setSameAsShipping(true);
    setFormData(initialFormData);
  };

  const inputClassName = "w-full p-2 border rounded focus:outline-none focus:border-[#C8B6A6] transition-colors";
  const labelClassName = "block text-gray-700 mb-1";

  const renderAddressForm = (type: 'shipping' | 'billing') => {
    const data = formData[type];
    const handleChange = type === 'shipping' ? handleShippingChange : handleBillingChange;
    const readOnly = !isEditing;

    return (
      <div className="space-y-4">
        <div>
          <label htmlFor={`${type}.fullName`} className={labelClassName}>
            {getLocalizedText('shipment.fullName')}
          </label>
          <input
            type="text"
            id={`${type}.fullName`}
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            className={`${inputClassName} ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''}`}
            required
            readOnly={readOnly}
            disabled={readOnly}
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
            value={data.address}
            onChange={handleChange}
            className={`${inputClassName} ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''}`}
            required
            readOnly={readOnly}
            disabled={readOnly}
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
              value={data.city}
              onChange={handleChange}
              className={`${inputClassName} ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              required
              readOnly={readOnly}
              disabled={readOnly}
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
              value={data.postalCode}
              onChange={handleChange}
              className={`${inputClassName} ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              required
              readOnly={readOnly}
              disabled={readOnly}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${type}.country`} className={labelClassName}>
              {getLocalizedText('shipment.country')}
            </label>
            <input
              type="text"
              id={`${type}.country`}
              name="country"
              value={data.country}
              onChange={handleChange}
              className={`${inputClassName} ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              required
              readOnly={readOnly}
              disabled={readOnly}
            />
          </div>
          <div>
            <label htmlFor={`${type}.phone`} className={labelClassName}>
              {getLocalizedText('shipment.phone')}
            </label>
            <input
              type="text"
              id={`${type}.phone`}
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className={`${inputClassName} ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              required
              readOnly={readOnly}
              disabled={readOnly}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Saved Addresses */}
        <div className="lg:col-span-4 mb-8 lg:mb-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{getLocalizedText('shipment.savedAddresses')}</h2>
            <button
              onClick={handleAddNewAddress}
              className="text-sm bg-[#C8B6A6] text-white px-4 py-2 rounded hover:bg-[#A4907C]"
            >
              {getLocalizedText('shipment.addNewAddress')}
            </button>
          </div>
          
          {savedAddresses.length === 0 ? (
            <p className="text-gray-500">{getLocalizedText('shipment.noSavedAddresses')}</p>
          ) : (
            <div className="space-y-4">
              {savedAddresses.map((addr) => (
                <div 
                  key={addr.id} 
                  className={`border rounded-lg p-4 ${selectedAddressId === addr.id ? 'border-[#C8B6A6] bg-[#F9F5F2]' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{addr.name}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditAddress(addr)}
                        className="text-sm text-[#C8B6A6] hover:text-[#A4907C]"
                      >
                        {getLocalizedText('shipment.editAddress')}
                      </button>
                      <button
                        onClick={() => handleUseAddress(addr)}
                        className="text-sm text-[#C8B6A6] hover:text-[#A4907C]"
                      >
                        {getLocalizedText('shipment.useThisAddress')}
                      </button>
                      <button
                        onClick={() => deleteAddress(addr.id)}
                        className="text-sm text-red-500 hover:text-red-600"
                      >
                        {getLocalizedText('shipment.deleteAddress')}
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{addr.fullName}</p>
                    <p>{addr.address}</p>
                    <p>{addr.city}, {addr.postalCode}</p>
                    <p>{addr.country}</p>
                    <p>{addr.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shipping Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {isEditing 
                  ? getLocalizedText('shipment.title')
                  : getLocalizedText('shipment.selectedAddress')
                }
              </h2>
              {renderAddressForm('shipping')}
              
              {/* Address Name Field - Only show when editing */}
              {isEditing && (
                <div className="mt-4">
                  <label htmlFor="addressName" className={labelClassName}>
                    {getLocalizedText('shipment.addressName')}
                  </label>
                  <input
                    type="text"
                    id="addressName"
                    name="addressName"
                    value={formData.addressName}
                    onChange={(e) => setFormData(prev => ({ ...prev, addressName: e.target.value }))}
                    className={inputClassName}
                  />
                </div>
              )}
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

            <button
              type="submit"
              className="w-full bg-[#C8B6A6] text-white py-3 rounded hover:bg-[#A4907C] transition-colors"
            >
              {isEditing 
                ? getLocalizedText('shipment.saveChanges')
                : getLocalizedText('shipment.proceedToPayment')
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
