import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Guarantee Card Frame matching Image 5 */}
        <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-xl p-8 sm:p-12 text-center relative overflow-hidden">
          
          {/* Top Green Circular Badge */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-[#0b6638] text-white flex flex-col items-center justify-center p-2 text-center shadow-md border-4 border-emerald-100">
              <span className="text-xl font-black leading-none">100%</span>
              <span className="text-[9px] font-extrabold uppercase tracking-tight leading-tight mt-1">
                SUPPORT<br />GUARANTEED
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-2">
            100% Follow-up and Full Support
          </h2>

          {/* Underlined Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 underline decoration-2 underline-offset-4">
            60-Day Satisfaction Guarantee – We Stand Behind Our Product
          </h3>

          {/* Guarantee Paragraphs */}
          <div className="space-y-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Our supplements are backed by a 60-day money-back guarantee from the date of purchase. If, after at least 30 days of use, you are not completely satisfied with your results, the product, or your overall experience, simply contact us at <a href="mailto:contact@customercs.com" className="font-bold text-slate-950 underline hover:text-[#0b6638]">contact@customercs.com</a>.
            </p>

            <p className="font-medium text-slate-800">
              We'll be ready to offer you all the guidance and support you need.
            </p>

            <p>
              This is how confident we are in the quality and effectiveness of our products. Order your kit today, completely risk-free. We'll be by your side every step of your wellness journey!
            </p>
          </div>

          {/* Bottom 5 Quality Badges matching Image 5 */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              
              {/* Seal 1: GMP */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-red-700 text-white flex flex-col items-center justify-center p-1 text-center border-2 border-red-800 shadow-sm">
                  <span className="text-[8px] font-bold">GOOD</span>
                  <span className="text-xs font-black">GMP</span>
                  <span className="text-[7px] font-bold">PRACTICE</span>
                </div>
              </div>

              {/* Seal 2: FDA Approved Facility */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex flex-col items-center justify-center p-1 text-center border-2 border-blue-800 shadow-sm">
                  <span className="text-[8px] font-bold">FACILITY</span>
                  <span className="text-xs font-black">FDA</span>
                  <span className="text-[7px] font-bold">REGISTERED</span>
                </div>
              </div>

              {/* Seal 3: 100% Natural */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center p-1 text-center border-2 border-emerald-700 shadow-sm">
                  <span className="text-[8px] font-bold">100%</span>
                  <span className="text-[10px] font-black">NATURAL</span>
                  <span className="text-[7px] font-bold">INGREDIENTS</span>
                </div>
              </div>

              {/* Seal 4: USA Made */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex flex-col items-center justify-center p-1 text-center border-2 border-blue-950 shadow-sm">
                  <span className="text-[8px] font-bold">MADE IN</span>
                  <span className="text-xs font-black">USA</span>
                  <span className="text-[7px] font-bold">FACILITY</span>
                </div>
              </div>

              {/* Seal 5: GMO Free */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex flex-col items-center justify-center p-1 text-center border-2 border-emerald-800 shadow-sm">
                  <span className="text-[8px] font-bold">NON</span>
                  <span className="text-xs font-black">GMO</span>
                  <span className="text-[7px] font-bold">FREE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
