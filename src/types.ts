export interface Product {
  category: string[];
  amount: number;
  [index: string]: any;
}

export interface NavCategory {
  title: string;
  type: string;
  icon: string;
  to?: string;
}

export interface ProductCategory {
  title: string;
  to: string;
}

export interface CheckoutStatus {
  [step: string]: boolean;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  address: string;
}

export interface DeliveryMethod {
  method: string;
  address: string;
  price: number;
}

export interface PaymentChoice {
  method: string;
  saveForLater: string;
}

export interface DiscountInterface {
  applied: boolean;
  coupon: string;
}
