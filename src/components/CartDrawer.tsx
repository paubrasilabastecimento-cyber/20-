import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import bottleMockupImg from '../assets/images/jointbrex_bottle_mockup_1785962311326.jpg';

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (packageId: string, quantity: number) => void;
  onRemoveItem: (packageId: string) => void;
  onProceedToCheckout: (appliedDiscountPercent: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // e.g. 10 for 10%
  const [couponMessage, setCouponMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.packageItem.totalPrice * item.quantity,
    0
  );

  const isFreeShipping = cart.some((item) => item.packageItem.freeShipping) || cart.length === 0;
  const shippingFee = isFreeShipping ? 0 : 9.95;

  const discountAmount = (subtotal * appliedDiscount) / 100;
  const finalTotal = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponInput.trim().toUpperCase();
    if (clean === 'VITALITY10' || clean === 'JOINT10' || clean === 'MOBILITY10') {
      setAppliedDiscount(10);
      setCouponMessage({ text: '10% Extra VIP Discount Applied!', type: 'success' });
    } else if (clean === 'FREEGIFT') {
      setAppliedDiscount(5);
      setCouponMessage({ text: '5% Special Bonus Discount Applied!', type: 'success' });
    } else {
      setCouponMessage({ text: 'Invalid promo code. Try VITALITY10 for 10% off.', type: 'error' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-lg">Your Order Cart</h3>
            <span className="bg-teal-500/20 text-teal-300 text-xs px-2 py-0.5 rounded-full font-bold">
              {cart.reduce((s, i) => s + i.quantity, 0)} Items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-teal-50 px-6 py-2.5 border-b border-teal-100 flex items-center justify-between text-xs font-semibold text-teal-900">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            {isFreeShipping ? 'Congratulations! You unlocked FREE US Shipping.' : 'Add a 3 or 6 Bottle pack for FREE Shipping'}
          </span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-base font-bold text-slate-700">Your cart is currently empty</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Select a 1, 3, or 6 bottle package to proceed with your joint health order.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.packageItem.id}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex gap-4 items-center"
              >
                <img
                  src={bottleMockupImg}
                  alt="JointBrex Package"
                  className="w-16 h-16 object-contain rounded-lg bg-white p-1 border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">
                    JointBrex™ ({item.packageItem.bottles} {item.packageItem.bottles === 1 ? 'Bottle' : 'Bottles'})
                  </h4>
                  <p className="text-xs text-slate-500">
                    ${item.packageItem.pricePerBottle}/bottle ({item.packageItem.supplyDays}-Day Supply)
                  </p>
                  <p className="text-xs font-extrabold text-teal-700 mt-1">
                    ${item.packageItem.totalPrice * item.quantity}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.packageItem.id, item.quantity - 1)}
                      className="w-6 h-6 rounded bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-300"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-slate-900 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.packageItem.id, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-300"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.packageItem.id)}
                  className="text-slate-400 hover:text-rose-600 p-1"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Promo code (e.g. VITALITY10)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border border-slate-300 uppercase bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700"
              >
                Apply
              </button>
            </form>

            {couponMessage && (
              <p
                className={`text-[11px] font-bold ${
                  couponMessage.type === 'success' ? 'text-emerald-700' : 'text-rose-600'
                }`}
              >
                {couponMessage.text}
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>VIP Discount ({appliedDiscount}%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>US Express Shipping:</span>
                <span className="font-bold text-slate-900">
                  {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-300">
                <span>Total Order Amount:</span>
                <span className="text-teal-700">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => onProceedToCheckout(appliedDiscount)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-700 text-white font-extrabold text-base hover:brightness-110 shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>PROCEED TO EXPRESS CHECKOUT</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-Bit SSL Encrypted • 60-Day Money-Back Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
