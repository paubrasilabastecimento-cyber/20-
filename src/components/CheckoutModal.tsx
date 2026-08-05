import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, Lock, PackageCheck, ArrowRight, Sparkles, Printer } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  cart: CartItem[];
  discountPercent: number;
  onClose: () => void;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  cart,
  discountPercent,
  onClose,
  onClearCart,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1 = Shipping, 2 = Payment, 3 = Confirmation Receipt

  // Form State
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('FL');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('321');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.packageItem.totalPrice * item.quantity,
    0
  );
  const isFreeShipping = cart.some((item) => item.packageItem.freeShipping) || cart.length === 0;
  const shippingFee = isFreeShipping ? 0 : 9.95;
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalAmount = subtotal - discountAmount + shippingFee;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'JB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep(3); // Confirmation
    onClearCart();
  };

  const deliveryDateStr = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString(
    'en-US',
    { weekday: 'short', month: 'short', day: 'numeric' }
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              256-Bit Encrypted Secure Checkout
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white">
            {step === 3 ? 'Order Confirmed!' : 'JointBrex™ Direct Order Checkout'}
          </h3>

          {/* Checkout Steps */}
          {step < 3 && (
            <div className="flex items-center gap-4 mt-4 text-xs font-bold text-slate-400">
              <span className={step === 1 ? 'text-teal-400 underline underline-offset-4' : 'text-slate-300'}>
                1. Shipping Address
              </span>
              <span>→</span>
              <span className={step === 2 ? 'text-teal-400 underline underline-offset-4' : 'text-slate-400'}>
                2. Payment &amp; Review
              </span>
            </div>
          )}
        </div>

        {/* STEP 1: Shipping Form */}
        {step === 1 && (
          <form onSubmit={() => setStep(2)} className="p-6 sm:p-8 space-y-6 flex-1 text-xs">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Truck className="w-4 h-4 text-teal-700" /> Contact &amp; Shipping Destination
              </h4>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Email Address (For Order Tracking)</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. robert.smith@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Robert"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="1234 Sunburst Way, Apt 4B"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Naples"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">State</label>
                  <input
                    type="text"
                    required
                    placeholder="FL"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm uppercase focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    placeholder="34102"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Total Callout */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700">Order Subtotal ({cart.length} Packages):</span>
              <span className="font-extrabold text-teal-800 text-base">${totalAmount.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-extrabold text-base hover:brightness-110 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Continue to Payment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}

        {/* STEP 2: Payment Form */}
        {step === 2 && (
          <form onSubmit={handleCompleteOrder} className="p-6 sm:p-8 space-y-6 flex-1 text-xs">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-teal-700" /> Secure Payment Information
              </h4>

              {/* Payment Methods Badges */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">Accepted Cards:</span>
                <span className="text-slate-500 font-semibold text-[11px]">Visa • Mastercard • Amex • Discover</span>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Credit / Debit Card Number</label>
                <input
                  type="text"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Expiration Date</label>
                  <input
                    type="text"
                    required
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">CVV Security Code</label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Order Review Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <h5 className="font-bold text-slate-900 uppercase">Order Summary</h5>
              <div className="flex justify-between text-slate-600">
                <span>Shipping To:</span>
                <span className="font-semibold text-slate-900">{firstName} {lastName}, {city} {state}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total Due Today:</span>
                <span className="font-black text-teal-800 text-base">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border border-slate-300 font-semibold text-slate-600 hover:bg-slate-100"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-700 text-white font-extrabold text-base hover:brightness-110 shadow-lg"
              >
                CONFIRM &amp; PLACE ORDER (${totalAmount.toFixed(2)})
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Order Receipt Confirmation */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
              <PackageCheck className="w-8 h-8" />
            </div>

            <div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Order Successful
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Thank You For Your Order!
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Order Reference Number: <strong className="text-slate-900 font-mono">{orderId}</strong>
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Recipient:</span>
                <span className="font-bold text-slate-900">{firstName} {lastName} ({email})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Shipping Address:</span>
                <span className="font-semibold text-slate-900">{address}, {city}, {state} {zip}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Estimated Delivery:</span>
                <span className="font-extrabold text-emerald-700">{deliveryDateStr} (US Express)</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-slate-900 pt-1">
                <span>Total Paid:</span>
                <span className="text-teal-800 font-black">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-medium">
              A confirmation receipt and tracking code have been dispatched to <strong>{email || 'your email'}</strong>. Your JointBrex™ supply will ship within 24 hours.
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
              >
                Return to JointBrex Store
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
