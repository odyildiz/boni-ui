import { AddressForm } from '../types/address';
import { PaymentFormData } from '../types/payment';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface MenuItem {
  id: number;
  nameKey: string;
  price: number;
  category: 'drinks' | 'food';
}

const API_BASE_URL = '/api';

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface CreateOrderRequest {
  items: OrderItem[];
  shippingDetails: AddressForm;
}

export interface ProcessPaymentRequest {
  orderId: number;
  paymentMethod: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  amount: number;
}

export const productApi = {
  getProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  }
};

export const menuApi = {
  getMenuItems: async (): Promise<MenuItem[]> => {
    const response = await fetch(`${API_BASE_URL}/menu-items`);
    if (!response.ok) throw new Error('Failed to fetch menu items');
    return response.json();
  }
};

export const orderApi = {
  createOrder: async (orderData: CreateOrderRequest) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) throw new Error('Failed to create order');
    return response.json();
  },

  processPayment: async (paymentData: ProcessPaymentRequest) => {
    const response = await fetch(`${API_BASE_URL}/orders/${paymentData.orderId}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) throw new Error('Payment processing failed');
    return response.json();
  },

  initiateShipment: async (orderId: number) => {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}/shipment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
    });
    if (!response.ok) throw new Error('Failed to initiate shipment');
    return response.json();
  },

  cancelOrder: async (orderId: number) => {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
    });
    if (!response.ok) throw new Error('Failed to cancel order');
    return response.json();
  },
};