import React from 'react';
import doctorJointBrexImg from '../assets/images/doctor_jointbrex_1785963451200.jpg';

export const DoctorSecretSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Discover the secret behind JointBrex and how it can transform your mobility and freedom of movement in just a few weeks.
            </h2>

            <div className="w-20 h-1.5 bg-[#0b6638] rounded-full" />

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              JointBrex is a formula developed to eliminate joint pain, restore joint function, and bring back mobility and confidence to your body — without relying on harsh medications, invasive procedures, or expensive treatments.
            </p>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              It works directly on the joints (where body mobility is regulated), providing deep nutritional support, stimulating circulation in the joints, and strengthening cartilage regeneration, so you can finally move with confidence and live without the fear of physical limitations.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src={doctorJointBrexImg}
                alt="Doctor presenting JointBrex supplement bottle"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40">
                  CLINICALLY DEVELOPED FORMULA
                </span>
                <p className="text-sm font-semibold mt-2 text-slate-200">
                  Physician recommended for safe daily cartilage & joint support.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
