import React, { useState, useEffect } from 'react';
import { PRODUCT_PACKAGES } from '../data/supplementData';
import { ProductPackage } from '../types';
import { ShoppingCart, Check } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: ProductPackage, directCheckout?: boolean) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  // Countdown Timer State (e.g. 29 minutes, 43 seconds)
  const [timeLeft, setTimeLeft] = useState({ minutes: 29, seconds: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 29, seconds: 59 }; // reset
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section id="packages" className="py-12 bg-slate-100 relative text-slate-900 font-sans">
      
      {/* Top Green Banner with Countdown Timer matching Image 4 */}
      <div className="bg-[#0b6638] text-white py-4 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm font-extrabold uppercase tracking-widest text-emerald-200">
            CLAIM DISCOUNT BEFORE SPECIAL US OFFER EXPIRES IN:
          </span>
          <div className="bg-emerald-950/80 border border-emerald-400/40 text-amber-300 font-black text-2xl sm:text-3xl px-6 py-1.5 rounded-xl tracking-wider shadow-inner">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>
        </div>
      </div>

      {/* Curved Header Separator */}
      <div className="w-full overflow-hidden leading-none mb-8">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-[#0b6638] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Package Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          
          {/* Card 1: 1 Bottle Package (Try Two) */}
          <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-xl overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header Bar */}
              <div className="bg-[#0a192f] text-white py-3 px-4 text-center">
                <h3 className="text-xl font-extrabold tracking-wide">Try Two</h3>
              </div>

              <div className="p-6 text-center">
                <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                  1 BOTTLES
                </h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  30 Day Supply
                </p>

                {/* Bottle Image */}
                <div className="h-44 flex items-center justify-center my-4">
                  <img
                    src="/src/assets/images/jointbrex_green_bottle_1785963437678.jpg"
                    alt="1 Bottle JointBrex"
                    className="h-40 object-contain drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Price Display */}
                <div className="my-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-extrabold text-slate-900">$</span>
                    <span className="text-5xl font-black text-slate-950">89</span>
                    <span className="text-xs font-bold text-slate-600 ml-1 leading-tight text-left">
                      Per<br />Bottle
                    </span>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="my-3">
                  <span className="text-xs font-black text-slate-900 uppercase">
                    YOU SAVE $200
                  </span>
                </div>

                <div className="border-t border-dotted border-slate-400 my-4" />

                {/* Benefits List */}
                <div className="space-y-2 text-sm text-slate-800 font-bold text-left px-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>60 DAYS GUARANTEE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA & Cards */}
            <div className="p-6 pt-0 space-y-4">
              <button
                onClick={() => onSelectPackage(PRODUCT_PACKAGES[0], true)}
                className="w-full bg-[#f3b52c] hover:bg-[#e2a41b] text-slate-950 font-black text-lg py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 fill-slate-950" />
                <span>ADD TO CART!</span>
              </button>

              {/* Credit Card Logos */}
              <div className="flex items-center justify-center gap-2 pt-1 opacity-90">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">Mastercard</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">VISA</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">AMEX</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">DISCOVER</span>
              </div>
            </div>
          </div>

          {/* Card 2: 6 Bottles Package (BEST VALUE! HIGHLIGHTED ORANGE CARD) */}
          <div className="bg-[#f98218] rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden flex flex-col justify-between transform lg:-translate-y-3 relative z-10">
            <div>
              {/* Header Bar */}
              <div className="bg-[#f98218] text-white py-3 px-4 text-center border-b border-amber-300/40">
                <h3 className="text-2xl font-black tracking-wider text-white uppercase drop-shadow-sm">
                  BEST VALUE!
                </h3>
              </div>

              <div className="p-6 text-center text-white">
                <h4 className="text-xl font-black uppercase tracking-tight">
                  6 BOTTLES
                </h4>
                <p className="text-xs font-bold text-amber-100 uppercase tracking-widest mb-4">
                  180 Day Supply
                </p>

                {/* Floating Tags */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="bg-amber-300 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded shadow uppercase">
                    MOST POPULAR ★★★★★
                  </span>
                  <span className="bg-amber-300 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded shadow uppercase">
                    FREE SHIPPING
                  </span>
                </div>

                {/* Bundle Image */}
                <div className="h-44 flex items-center justify-center my-2">
                  <img
                    src="/src/assets/images/bottles_bundle_six_1785963474004.jpg"
                    alt="6 Bottles JointBrex Bundle"
                    className="h-40 object-contain rounded-xl drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Price Display */}
                <div className="my-3">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-extrabold text-white">$</span>
                    <span className="text-6xl font-black text-white drop-shadow">49</span>
                    <span className="text-xs font-bold text-amber-100 ml-1 leading-tight text-left">
                      Per<br />Bottle
                    </span>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="my-2">
                  <span className="text-xs font-black text-white bg-slate-950/40 px-3 py-1 rounded-full uppercase border border-amber-300/30">
                    YOU SAVE $780
                  </span>
                </div>

                <div className="border-t border-dotted border-amber-200/50 my-4" />

                {/* Benefits List */}
                <div className="space-y-2 text-sm text-white font-bold text-left px-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>BIGGEST DISCOUNT</span>
                  </div>
                  <div className="border-t border-dotted border-amber-200/40" />
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>+5 FREE BONUSES</span>
                  </div>
                  <div className="border-t border-dotted border-amber-200/40" />
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-200 shrink-0" />
                    <span>60 DAYS GUARANTEE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <button
                onClick={() => onSelectPackage(PRODUCT_PACKAGES[1], true)}
                className="w-full bg-[#f3b52c] hover:bg-[#e2a41b] text-slate-950 font-black text-xl py-4 px-4 rounded-xl shadow-xl hover:shadow-2xl transition-all uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-6 h-6 fill-slate-950" />
                <span>ADD TO CART!</span>
              </button>
            </div>
          </div>

          {/* Card 3: 3 Bottles Package (Good Value!) */}
          <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-xl overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header Bar */}
              <div className="bg-[#0a192f] text-white py-3 px-4 text-center">
                <h3 className="text-xl font-extrabold tracking-wide">Good Value!</h3>
              </div>

              <div className="p-6 text-center">
                <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                  3 BOTTLES
                </h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  90 Day Supply
                </p>

                {/* Tag */}
                <div className="flex justify-center mb-2">
                  <span className="bg-amber-300 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded shadow uppercase">
                    FREE SHIPPING
                  </span>
                </div>

                {/* Bottle Image */}
                <div className="h-44 flex items-center justify-center my-2">
                  <img
                    src="/src/assets/images/bottles_bundle_six_1785963474004.jpg"
                    alt="3 Bottles JointBrex"
                    className="h-36 object-contain drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Price Display */}
                <div className="my-3">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-extrabold text-slate-900">$</span>
                    <span className="text-5xl font-black text-slate-950">59</span>
                    <span className="text-xs font-bold text-slate-600 ml-1 leading-tight text-left">
                      Per<br />Bottle
                    </span>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="my-2">
                  <span className="text-xs font-black text-slate-900 uppercase">
                    YOU SAVE $330
                  </span>
                </div>

                <div className="border-t border-dotted border-slate-400 my-4" />

                {/* Benefits List */}
                <div className="space-y-2 text-sm text-slate-800 font-bold text-left px-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>+5 FREE BONUSES</span>
                  </div>
                  <div className="border-t border-dotted border-slate-300" />
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>60 DAYS GUARANTEE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA & Cards */}
            <div className="p-6 pt-0 space-y-4">
              <button
                onClick={() => onSelectPackage(PRODUCT_PACKAGES[2], true)}
                className="w-full bg-[#f3b52c] hover:bg-[#e2a41b] text-slate-950 font-black text-lg py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 fill-slate-950" />
                <span>ADD TO CART!</span>
              </button>

              {/* Credit Card Logos */}
              <div className="flex items-center justify-center gap-2 pt-1 opacity-90">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">Mastercard</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">VISA</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">AMEX</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase">DISCOVER</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
