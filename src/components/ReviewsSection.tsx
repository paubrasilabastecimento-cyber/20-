import React from 'react';
import { Star, Check } from 'lucide-react';
import doctorJointBrexImg from '../assets/images/doctor_jointbrex_1785963451200.jpg';
import activeLifestyleImg from '../assets/images/active_lifestyle_hero_1785962324931.jpg';
import bottleMockupImg from '../assets/images/jointbrex_bottle_mockup_1785962311326.jpg';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white text-slate-900 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Eliminate joint pain, and live with freedom of movement.
          </h2>

          {/* Dark Pill Badge */}
          <div className="inline-block bg-[#0a192f] text-white font-extrabold text-sm sm:text-base px-6 py-2 rounded-full shadow-md">
            Life Changing Results
          </div>
        </div>

        {/* Senior Customer Photo Gallery matching Image 7 */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 my-10 overflow-hidden px-2">
          
          {/* Senior 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-36 sm:w-48">
            <img
              src={doctorJointBrexImg}
              alt="Satisfied JointBrex User Jessica"
              className="w-full h-44 sm:h-56 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Senior 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 transform rotate-1 hover:rotate-0 transition-transform duration-300 w-40 sm:w-52 z-10">
            <img
              src={activeLifestyleImg}
              alt="Satisfied Senior Couple Richard & Wife"
              className="w-full h-48 sm:h-60 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Senior 3 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 transform rotate-3 hover:rotate-0 transition-transform duration-300 w-36 sm:w-48">
            <img
              src={bottleMockupImg}
              alt="JointBrex Bottle in Daily Routine"
              className="w-full h-44 sm:h-56 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

        {/* Testimonials List */}
        <div className="space-y-6 max-w-4xl mx-auto pt-6">
          
          {/* Testimonial Card 1: Jessica Martinez */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-emerald-600 shadow-md">
              <img
                src={doctorJointBrexImg}
                alt="Jessica Martinez avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              {/* Stars */}
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
                "I was afraid to climb stairs because of the constant knee pain. I couldn't even play with my grandchildren without suffering for days after. After 3 weeks of taking JointBrex, I can finally move without that sharp pain. I'm back to my morning walks and enjoying time with my family. My life has completely changed!"
              </p>

              {/* Author Info */}
              <div className="pt-2">
                <p className="font-bold text-slate-950 text-base">
                  Jessica Martinez <span className="text-slate-500 font-normal">– Austin, TX</span>
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mt-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2: Richard Coleman */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-emerald-600 shadow-md">
              <img
                src={activeLifestyleImg}
                alt="Richard Coleman avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              {/* Stars & Badge */}
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Purchase</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
                "My hands were so stiff every morning that I couldn't even hold my coffee cup properly. Simple tasks like opening a jar felt impossible. After using JointBrex for about a month, the stiffness is almost gone. I finally feel like myself again and can do things I had given up on."
              </p>

              {/* Author Info */}
              <div className="pt-2">
                <p className="font-bold text-slate-950 text-base">
                  Richard Coleman, 67 <span className="text-slate-500 font-normal">– Denver, Colorado</span>
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mt-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
