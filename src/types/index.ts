export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  images?: string[];
  isPopular?: boolean;
  reviews?: Review[];
  video?: string;
}

export interface Review {
  id: string;
  author: string;
  email?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Currency = 'EUR' | 'USD' | 'GBP' | 'JPY';

export interface ShippingAddress {
  streetAndNumber: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  cartTotal: number;
  clearCart: () => void;
};
