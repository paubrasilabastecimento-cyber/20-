import React, { useState } from 'react';
import { ProductPackage, CartItem } from './types';
import { PRODUCT_PACKAGES } from './data/supplementData';
import { Hero } from './components/Hero';
import { DoctorSecretSection } from './components/DoctorSecretSection';
import { PackagesSection } from './components/PackagesSection';
import { DoctorQuoteSection } from './components/DoctorQuoteSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ScienceIngredients } from './components/ScienceIngredients';
import { MobilityQuiz } from './components/MobilityQuiz';
import { TimelineSection } from './components/TimelineSection';
import { DailyTracker } from './components/DailyTracker';
import { FAQSection } from './components/FAQSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    // Start with 6-bottle BEST VALUE package in cart for high conversion
    { packageItem: PRODUCT_PACKAGES[1], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectPackage = (pkg: ProductPackage, directCheckout = false) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.packageItem.id === pkg.id);
      if (existing) {
        return prevCart.map((item) =>
          item.packageItem.id === pkg.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { packageItem: pkg, quantity: 1 }];
    });

    if (directCheckout) {
      setIsCheckoutOpen(true);
    } else {
      showToast(`Added ${pkg.bottles} Bottle Package to Order Cart!`);
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (packageId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(packageId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.packageItem.id === packageId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (packageId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.packageItem.id !== packageId));
  };

  const handleProceedToCheckout = (appliedDiscount: number) => {
    setDiscountPercent(appliedDiscount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Main High-Converting Sales Page */}
      <main>
        {/* Section 1: Hero Banner (Matching Image 2) */}
        <Hero onOrderNowClick={() => handleScrollToSection('packages')} />

        {/* Section 2: Doctor Secret Behind JointBrex (Matching Image 3) */}
        <DoctorSecretSection />

        {/* Section 3: Countdown Timer & 3 Offer Packages (Matching Image 4) */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* Section 4: Doctor Recommendation Quote (Matching Image 6) */}
        <DoctorQuoteSection />

        {/* Section 5: 100% Support & 60-Day Satisfaction Guarantee (Matching Image 5) */}
        <GuaranteeSection />

        {/* Section 6: Verified Customer Testimonials & Senior Photos (Matching Image 7) */}
        <ReviewsSection />

        {/* Section 7: Ingredient Science Matrix */}
        <ScienceIngredients />

        {/* Section 8: Interactive Mobility Assessment Quiz */}
        <MobilityQuiz onSelectPackage={handleSelectPackage} />

        {/* Section 9: 30 to 180 Days Results Timeline */}
        <TimelineSection />

        {/* Section 10: Frequently Asked Questions & US Shipping */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        cart={cart}
        discountPercent={discountPercent}
        onClose={() => setIsCheckoutOpen(false)}
        onClearCart={() => setCart([])}
      />

      {/* Daily Comfort Tracker Modal */}
      <DailyTracker
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
