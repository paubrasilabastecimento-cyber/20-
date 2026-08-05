import React from 'react';
import { ShoppingBag, ShieldCheck, Activity, Award, Menu, X, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenTracker: () => void;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onOpenTracker,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: 'Packages & Pricing', id: 'packages' },
    { label: 'Science & Ingredients', id: 'science' },
    { label: 'Mobility Quiz', id: 'quiz' },
    { label: 'Timeline & Results', id: 'timeline' },
    { label: 'Customer Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
        <span>
          <strong>OFFICIAL STORE OFFER:</strong> Up to 56% OFF + Free US Express Shipping on Multi-Bottle Orders!
        </span>
        <span className="hidden md:inline-flex items-center gap-1 bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded-full text-xs border border-amber-300/30">
          <ShieldCheck className="w-3.5 h-3.5" /> 60-Day Money-Back Guarantee
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('top')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-emerald-500 text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              J
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-sans">
                  JOINT<span className="text-teal-700">BREX</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider border border-emerald-200">
                  ADVANCED
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide -mt-0.5">
                Cartilage & Joint Mobility Matrix
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Daily Tracker Button */}
            <button
              onClick={onOpenTracker}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 hover:bg-teal-100/80 transition-all shadow-2xs"
              title="Daily Joint Comfort Log"
            >
              <Activity className="w-4 h-4 text-teal-600" />
              <span>Daily Comfort Tracker</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-teal-800 transition-all shadow-sm font-semibold text-sm group"
            >
              <ShoppingBag className="w-4 h-4 text-teal-300 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Order Cart</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTracker();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-teal-50 text-teal-800 border border-teal-200"
            >
              <Activity className="w-4 h-4" />
              <span>Open Daily Joint Comfort Log</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
