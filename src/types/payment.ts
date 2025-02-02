export interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export interface PaymentDetails extends PaymentFormData {
  paymentMethod: string;
  amount: number;
}