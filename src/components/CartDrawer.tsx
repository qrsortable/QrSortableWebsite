import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingCart, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useTranslation } from '../contexts/LanguageContext';
import { PRODUCT_TRANSLATIONS } from '../constants/products';

import { GENERATOR_STUDIO_TRANSLATIONS } from '../constants/codeGeneratorTranslations';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();
  const { t, language, localizePath } = useTranslation();
  const genT = GENERATOR_STUDIO_TRANSLATIONS[language as 'EN' | 'DE' | 'FR' | 'ES'] || GENERATOR_STUDIO_TRANSLATIONS.EN;
  const isDigitalOnly = cart.length > 0 && cart.every(item => item.isDigital);

  if (!isCartOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={toggleCart}></div>
      <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <h2 className="text-3xl font-black text-gray-900">{t('cart', 'title')}</h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-gray-900 transition-colors">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <ShoppingCart className="h-24 w-24 mb-6 opacity-20" />
              <p className="text-2xl font-bold">{t('cart', 'empty')}</p>
              <button onClick={toggleCart} className="mt-6 text-[#FDB623] font-black text-xl hover:underline transition-all">{t('cart', 'startShopping')}</button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map(item => {
                const cfg = item.generatorConfig;
                const displayName = item.isDigital && cfg
                  ? `${genT.orderLabelPrefix} (${cfg.pageFormat} · ${cfg.codeType === 'qr' ? genT.qrOption : genT.barcodeOption})`
                  : (PRODUCT_TRANSLATIONS[item.id]?.[language]?.name || item.name);

                return (
                  <div key={item.id} className="flex items-center space-x-6 bg-gray-50 p-5 rounded-[2rem]">
                    <div className="relative shrink-0">
                      <img src={item.image} alt={displayName} className="h-24 w-24 object-cover rounded-2xl border border-gray-200" />
                      {item.isDigital && cfg && (
                        <span
                          className="absolute -bottom-1.5 -right-1.5 h-6 w-6 rounded-full border-2 border-white shadow"
                          style={{ backgroundColor: cfg.codeType === 'qr' ? cfg.hexColor : '#000000' }}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-xl text-gray-900 break-words">
                        {displayName}
                      </h3>
                      {item.isDigital && cfg && (
                        <p className="text-xs font-bold text-gray-500 mt-1">
                          {item.quantity} {genT.pagesUnit} ({item.quantity * (cfg.pageFormat === 'A5' ? 6 : 12)} {genT.labelsUnit})
                          {cfg.tagName ? ` · ${genT.tagPrefix}: ${cfg.tagName}` : ''}
                        </p>
                      )}
                      <p className="text-[#FDB623] font-black text-lg mt-0.5">€{item.price.toFixed(2)} {item.isDigital ? `/ ${genT.pagesUnit}` : ''}</p>
                      <div className="flex items-center mt-3 space-x-5">
                        <div className="flex items-center bg-white rounded-xl border-2 border-gray-100">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100 transition-colors"><Minus className="h-5 w-5" /></button>
                          <span className="px-4 text-xl font-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={Boolean(item.isDigital && item.quantity >= 5)}
                            className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-30"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 transition-colors">
                          <Trash2 className="h-7 w-7" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6 text-3xl font-black text-gray-900">
              <span>{t('cart', 'total')}</span>
              <span>€{cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-lg text-center text-gray-500 mb-6 font-bold">
              {isDigitalOnly ? genT.digitalDeliveryBadge : t('cart', 'checkoutNote')}
            </p>
            <button onClick={() => { toggleCart(); navigate(localizePath('/checkout')); }} className="w-full bg-[#FDB623] text-black py-5 rounded-[1.5rem] font-black text-2xl hover:bg-yellow-400 shadow-xl flex items-center justify-center transition-all">
              {t('cart', 'secureCheckout')} <ArrowRight className="ml-3 h-7 w-7" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
