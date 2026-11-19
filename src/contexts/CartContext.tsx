import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { Product, CartItem, CartContextType } from '../types';
import { PRODUCTS } from '../constants/products';
import { PRICE_PER_PAGE_EUR, sanitizeHexColor } from '../utils/labelPdfGenerator';

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'qrsortable_cart_v1';

export function sanitizeCartItems(rawItems: unknown): CartItem[] {
  if (!Array.isArray(rawItems)) return [];
  const sanitized: CartItem[] = [];

  for (const raw of rawItems) {
    if (!raw || typeof raw !== 'object') continue;
    const item = raw as Partial<CartItem>;
    if (typeof item.id !== 'string' || !item.id) continue;

    if (item.isDigital && item.generatorConfig) {
      const format = item.generatorConfig.pageFormat === 'A5' ? 'A5' : 'A4';
      const codeType = item.generatorConfig.codeType === 'barcode' ? 'barcode' : 'qr';
      const qty = Math.min(5, Math.max(1, Math.round(Number(item.quantity) || item.generatorConfig.pageCount || 1)));
      sanitized.push({
        ...(item as CartItem),
        isDigital: true,
        price: PRICE_PER_PAGE_EUR[format],
        quantity: qty,
        generatorConfig: {
          codeType,
          pageFormat: format,
          pageCount: qty,
          tagName: typeof item.generatorConfig.tagName === 'string' ? item.generatorConfig.tagName.slice(0, 40) : '',
          hexColor: codeType === 'qr' ? sanitizeHexColor(item.generatorConfig.hexColor) : '#000000',
          showCutLines: Boolean(item.generatorConfig.showCutLines),
        },
      });
      continue;
    }

    const catalogProduct = PRODUCTS.find((p) => p.id === item.id);
    if (!catalogProduct) continue;

    const qty = Math.min(99, Math.max(1, Math.round(Number(item.quantity) || 1)));
    sanitized.push({
      ...catalogProduct,
      isDigital: false,
      quantity: qty,
    });
  }

  return sanitized;
}

function loadInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    return sanitizeCartItems(JSON.parse(raw));
  } catch {
    return [];
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(loadInitialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage quota errors
    }
  }, [cart]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === CART_STORAGE_KEY) {
        setCart(loadInitialCart());
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const addToCart = (product: Product, options?: { openDrawer?: boolean; quantity?: number }) => {
    const qtyToAdd = options?.quantity ?? product.generatorConfig?.pageCount ?? 1;
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const nextQty = existing.isDigital
          ? Math.min(5, Math.max(1, existing.quantity + qtyToAdd))
          : existing.quantity + qtyToAdd;
        return prev.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: nextQty,
                generatorConfig: item.generatorConfig
                  ? { ...item.generatorConfig, pageCount: nextQty }
                  : undefined,
              }
            : item
        );
      }
      const clampedQty = product.isDigital ? Math.min(5, Math.max(1, qtyToAdd)) : Math.max(1, qtyToAdd);
      return [
        ...prev,
        {
          ...product,
          quantity: clampedQty,
          generatorConfig: product.generatorConfig
            ? { ...product.generatorConfig, pageCount: clampedQty }
            : undefined,
        },
      ];
    });
    if (options?.openDrawer !== false) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(item => {
        if (item.id !== productId) return item;
        const clamped = item.isDigital ? Math.min(5, Math.max(1, quantity)) : quantity;
        return {
          ...item,
          quantity: clamped,
          generatorConfig: item.generatorConfig
            ? { ...item.generatorConfig, pageCount: clamped }
            : undefined,
        };
      })
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const clearCart = () => setCart([]);

  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, isCartOpen, addToCart, removeFromCart, updateQuantity, toggleCart, cartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
