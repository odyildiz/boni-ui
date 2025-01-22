import { ReactNode, createContext, useContext, useState, useEffect } from 'react';

interface Address {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

interface SavedAddress {
  id: string;
  name: string;
  shipping: Address;
  billing: Address;
  sameAsShipping: boolean;
}

interface OrderContextType {
  shippingAddress: Address | null;
  billingAddress: Address | null;
  savedAddresses: SavedAddress[];
  setShippingAddress: (address: Address) => void;
  setBillingAddress: (address: Address) => void;
  saveAddress: (name: string, shipping: Address, billing: Address, sameAsShipping: boolean) => SavedAddress;
  updateAddress: (id: string, name: string, shipping: Address, billing: Address, sameAsShipping: boolean) => void;
  deleteAddress: (id: string) => void;
  useAddress: (savedAddress: SavedAddress) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const SAVED_ADDRESSES_KEY = 'savedAddresses';
const CURRENT_SHIPPING_KEY = 'currentShipping';
const CURRENT_BILLING_KEY = 'currentBilling';

export function OrderProvider({ children }: { children: ReactNode }) {
  const [shippingAddress, setShippingAddressState] = useState<Address | null>(null);
  const [billingAddress, setBillingAddressState] = useState<Address | null>(null);
  const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([]);

  useEffect(() => {
    const savedAddressesStr = localStorage.getItem(SAVED_ADDRESSES_KEY);
    const currentShippingStr = localStorage.getItem(CURRENT_SHIPPING_KEY);
    const currentBillingStr = localStorage.getItem(CURRENT_BILLING_KEY);

    if (savedAddressesStr) {
      setSavedAddresses(JSON.parse(savedAddressesStr));
    }
    if (currentShippingStr) {
      setShippingAddressState(JSON.parse(currentShippingStr));
    }
    if (currentBillingStr) {
      setBillingAddressState(JSON.parse(currentBillingStr));
    }
  }, []);

  const setShippingAddress = (address: Address) => {
    setShippingAddressState(address);
    localStorage.setItem(CURRENT_SHIPPING_KEY, JSON.stringify(address));
  };

  const setBillingAddress = (address: Address) => {
    setBillingAddressState(address);
    localStorage.setItem(CURRENT_BILLING_KEY, JSON.stringify(address));
  };

  const saveAddress = (name: string, shipping: Address, billing: Address, sameAsShipping: boolean) => {
    const newSavedAddress: SavedAddress = {
      id: Date.now().toString(),
      name,
      shipping,
      billing,
      sameAsShipping
    };
    const updatedAddresses = [...savedAddresses, newSavedAddress];
    setSavedAddresses(updatedAddresses);
    localStorage.setItem(SAVED_ADDRESSES_KEY, JSON.stringify(updatedAddresses));
    return newSavedAddress;
  };

  const updateAddress = (id: string, name: string, shipping: Address, billing: Address, sameAsShipping: boolean) => {
    const updatedAddresses = savedAddresses.map(addr => 
      addr.id === id ? { id, name, shipping, billing, sameAsShipping } : addr
    );
    setSavedAddresses(updatedAddresses);
    localStorage.setItem(SAVED_ADDRESSES_KEY, JSON.stringify(updatedAddresses));
  };

  const deleteAddress = (id: string) => {
    const updatedAddresses = savedAddresses.filter(addr => addr.id !== id);
    setSavedAddresses(updatedAddresses);
    localStorage.setItem(SAVED_ADDRESSES_KEY, JSON.stringify(updatedAddresses));
  };

  const useAddress = (savedAddress: SavedAddress) => {
    setShippingAddress(savedAddress.shipping);
    setBillingAddress(savedAddress.sameAsShipping ? savedAddress.shipping : savedAddress.billing);
  };

  return (
    <OrderContext.Provider
      value={{
        shippingAddress,
        billingAddress,
        savedAddresses,
        setShippingAddress,
        setBillingAddress,
        saveAddress,
        updateAddress,
        deleteAddress,
        useAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
