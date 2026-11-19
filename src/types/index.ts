export type GeneratorCodeType = 'qr' | 'barcode';
export type GeneratorPageFormat = 'A4' | 'A5';

export interface GeneratorOrderConfig {
  codeType: GeneratorCodeType;
  pageFormat: GeneratorPageFormat;
  pageCount: number; // 1..5
  tagName: string;
  hexColor: string;
  showCutLines?: boolean;
}

export interface PaidPdfItem extends GeneratorOrderConfig {
  id: string;
  codes: string[];
  unitPriceEur: number;
}

export interface PaidPdfOrder {
  orderId: string;
  paidAt: string;
  customerEmail?: string;
  items: PaidPdfItem[];
}

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
  isDigital?: boolean;
  generatorConfig?: GeneratorOrderConfig;
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
  addToCart: (product: Product, options?: { openDrawer?: boolean; quantity?: number }) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  cartTotal: number;
  clearCart: () => void;
};
