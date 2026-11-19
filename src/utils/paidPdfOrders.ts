import { CartItem, PaidPdfItem, PaidPdfOrder } from '../types';
import { generateUniqueCodeBatch, PRICE_PER_PAGE_EUR } from './labelPdfGenerator';

const PENDING_KEY_PREFIX = 'qrsortable_pending_pdf_order_';
const PAID_ORDERS_KEY = 'qrsortable_paid_pdf_orders';
const AUTO_DOWNLOADED_PREFIX = 'qrsortable_auto_downloaded_';

export function savePendingDigitalCartForOrder(orderId: string, items: CartItem[]): void {
  const digitalItems = items.filter((item) => item.isDigital && item.generatorConfig);
  if (digitalItems.length === 0) return;
  try {
    const serialized = JSON.stringify(digitalItems);
    localStorage.setItem(`${PENDING_KEY_PREFIX}${orderId}`, serialized);
  } catch {
    // Ignore storage quota errors
  }
}

export function finalizePaidDigitalOrder(
  orderId: string,
  customerEmail?: string,
  fallbackCartItems?: CartItem[]
): PaidPdfOrder | null {
  try {
    const existing = getPaidPdfOrderById(orderId);
    if (existing) return existing;

    const raw =
      localStorage.getItem(`${PENDING_KEY_PREFIX}${orderId}`) ||
      sessionStorage.getItem(`${PENDING_KEY_PREFIX}${orderId}`);
    const cartItems: CartItem[] | null = raw
      ? JSON.parse(raw)
      : fallbackCartItems && fallbackCartItems.length > 0
      ? fallbackCartItems
      : null;
    if (!cartItems || cartItems.length === 0) return null;
    const paidItems: PaidPdfItem[] = cartItems
      .filter((i) => i.isDigital && i.generatorConfig)
      .map((item) => {
        const cfg = item.generatorConfig!;
        const pageCount = Math.max(1, Math.min(5, item.quantity || cfg.pageCount));
        return {
          ...cfg,
          pageCount,
          id: item.id,
          unitPriceEur: PRICE_PER_PAGE_EUR[cfg.pageFormat],
          codes: generateUniqueCodeBatch(cfg.pageFormat, pageCount),
        };
      });

    if (paidItems.length === 0) return null;

    const order: PaidPdfOrder = {
      orderId,
      paidAt: new Date().toISOString(),
      customerEmail,
      items: paidItems,
    };

    const current = getPaidPdfOrders();
    const updated = [order, ...current.filter((o) => o.orderId !== orderId)].slice(0, 15);
    localStorage.setItem(PAID_ORDERS_KEY, JSON.stringify(updated));
    localStorage.removeItem(`${PENDING_KEY_PREFIX}${orderId}`);
    sessionStorage.removeItem(`${PENDING_KEY_PREFIX}${orderId}`);
    return order;
  } catch {
    return null;
  }
}

export function hasAutoDownloadedOrder(orderId: string): boolean {
  try {
    return localStorage.getItem(`${AUTO_DOWNLOADED_PREFIX}${orderId}`) === '1';
  } catch {
    return false;
  }
}

export function markOrderAutoDownloaded(orderId: string): void {
  try {
    localStorage.setItem(`${AUTO_DOWNLOADED_PREFIX}${orderId}`, '1');
  } catch {
    // Ignore storage errors
  }
}

export function getPaidPdfOrders(): PaidPdfOrder[] {
  try {
    const raw = localStorage.getItem(PAID_ORDERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getPaidPdfOrderById(orderId: string): PaidPdfOrder | null {
  return getPaidPdfOrders().find((o) => o.orderId === orderId) ?? null;
}
