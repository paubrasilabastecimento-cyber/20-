import React from 'react';

export const DoctorQuoteSection: React.FC = () => {
  return (
    <section className="py-12 bg-white text-slate-900 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Quote Card Container matching Image 6 */}
        <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-blue-100/80 rounded-3xl border-2 border-slate-900 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Quote & Recommendation Text */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Main Bold Quote */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 leading-snug">
                "I've carefully examined several options for joint &amp; mobility supplements, stiffness treatments, and balance support solutions, and I can confidently say that JointBrex is truly unique."
              </h3>

              {/* Blue Vertical Accent Line & Subtext */}
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-20 bg-blue-700 rounded-full shrink-0" />
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic">
                  If you're looking to eliminate persistent joint stiffness, restore joint system function, and recover stability and confidence in your movements with a safe and natural formula, I strongly recommend JointBrex.
                </p>
              </div>

            </div>

            {/* Right Doctor Portrait Image */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative rounded-2xl overflow-hidden max-w-xs shadow-xl border-2 border-slate-900">
                <img
                  src="/src/assets/images/doctor_recommend_1785963463227.jpg"
                  alt="Board Certified Physician Recommending JointBrex"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
