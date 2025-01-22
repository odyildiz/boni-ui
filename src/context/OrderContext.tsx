import { ReactNode, createContext, useContext, useState } from 'react';

interface Address {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

interface OrderContextType {
  shippingAddress: Address | null;
  billingAddress: Address | null;
  setShippingAddress: (address: Address) => void;
  setBillingAddress: (address: Address) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [shippingAddress, setShippingAddress] = useState<Address | null>(null);
  const [billingAddress, setBillingAddress] = useState<Address | null>(null);

  return (
    <OrderContext.Provider
      value={{
        shippingAddress,
        billingAddress,
        setShippingAddress,
        setBillingAddress,
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
