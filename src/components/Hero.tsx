import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOrderNowClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNowClick }) => {
  return (
    <section className="relative bg-[#0b6638] text-white pt-6 pb-16 lg:py-20 overflow-hidden font-sans">
      {/* Background ambient lighting and subtle bubble effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Floating glossy green drops/orbs in background */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-emerald-300/15 blur-xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-36 h-36 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Product Display Pedestal matching Image 2 */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Product Pedestal Graphic Frame */}
              <div className="relative rounded-3xl p-6 bg-gradient-to-b from-emerald-800/40 via-emerald-900/60 to-[#084d2d] border border-emerald-400/30 shadow-2xl backdrop-blur-sm flex flex-col items-center">
                
                {/* 3D Bottle Display Image */}
                <div className="relative z-10 w-full flex justify-center py-4">
                  <img
                    src="/src/assets/images/jointbrex_green_bottle_1785963437678.jpg"
                    alt="JointBrex Bottle Display"
                    className="h-80 sm:h-96 object-contain rounded-2xl shadow-2xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Pedestal Base Label */}
                <div className="w-full text-center py-2 px-4 rounded-xl bg-black/30 border border-emerald-500/30 backdrop-blur-md mt-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">
                    PREMIUM DIETARY SUPPLEMENT • 60 CAPSULES
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side: Headline and Sales Copy matching Image 2 */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug lg:leading-tight">
              JointBrex is the best choice to eliminate joint pain, restore body mobility, and bring back the freedom of movement you deserve — naturally and effectively.
            </h1>

            {/* Paragraph Sub-copy */}
            <p className="text-base sm:text-xl text-emerald-50 font-normal leading-relaxed text-slate-100">
              Try JointBrex: an advanced formula with clinically tested nutrients that support joint regeneration, eliminate joint discomfort, and restore the confidence and freedom of movement you deserve in your daily life.
            </p>

            {/* Quick Action CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <button
                onClick={onOrderNowClick}
                className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-lg sm:text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wide flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>CLAIM YOUR DISCOUNTED BOTTLES NOW</span>
                <span className="text-xl">➔</span>
              </button>
            </div>

            {/* B&W Circular Badges Bar matching Image 2 */}
            <div className="pt-6 w-full border-t border-emerald-500/40">
              <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-6">
                
                {/* Badge 1: GUARANTEED PURE */}
                <div className="flex items-center gap-2 bg-white text-slate-900 px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-xs font-black uppercase tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                  <span>GUARANTEED PURE</span>
                </div>

                {/* Badge 2: DOCTOR FORMULATED */}
                <div className="flex items-center gap-2 bg-white text-slate-900 px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-xs font-black uppercase tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    ⚕
                  </div>
                  <span>DOCTOR FORMULATED</span>
                </div>

                {/* Badge 3: DAIRY FREE */}
                <div className="flex items-center gap-2 bg-white text-slate-900 px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-xs font-black uppercase tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    🚫
                  </div>
                  <span>DAIRY FREE</span>
                </div>

                {/* Badge 4: VEGETARIAN */}
                <div className="flex items-center gap-2 bg-white text-slate-900 px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-xs font-black uppercase tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    🌱
                  </div>
                  <span>VEGETARIAN</span>
                </div>

                {/* Badge 5: NATURALLY GLUTEN FREE */}
                <div className="flex items-center gap-2 bg-white text-slate-900 px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-xs font-black uppercase tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    🌾
                  </div>
                  <span>NATURALLY GLUTEN FREE</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
