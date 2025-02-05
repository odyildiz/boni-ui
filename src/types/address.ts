export interface AddressForm {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

export interface SavedAddress extends AddressForm {
  id: string;
  addressName: string;
}