import React from 'react';
import { Calendar, CheckCircle, TrendingUp, ShieldAlert, Sparkles, Clock } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase mb-4">
            <Clock className="w-4 h-4 text-emerald-600" /> What To Expect
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Your Joint Comfort Timeline
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Nutritional structural rebuilding requires consistent daily intake. Here is the typical progression reported by JointBrex™ users over 180 days.
          </p>
        </div>

        {/* 3 Timeline Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Phase 1 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-2xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-teal-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  Phase 1
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Weeks 1 - 2
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Initial Soothing &amp; Easing</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Fast-acting botanical extracts like Boswellia Serrata and Turmeric begin to accumulate in the bloodstream to quiet localized joint achiness.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Slightly easier morning movements when stepping out of bed</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Reduced tight soreness after walking or standing</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium italic">
              Key action: Botanical enzymes suppress 5-LOX.
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-teal-900 text-white rounded-3xl p-8 border border-teal-800 shadow-xl relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  Phase 2 (Recommended)
                </span>
                <span className="text-xs font-bold text-teal-200 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Weeks 3 - 8
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Cartilage Lubrication &amp; Flexibility</h3>
              <p className="text-sm text-teal-100 leading-relaxed mb-6">
                Glucosamine and Chondroitin actively bind water molecules inside dry joint spaces. Knee, hip, and finger flexion range improves noticeably.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-100 font-medium">
                  <CheckCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Climbing stairs feels smoother without gripping handrails tight</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-100 font-medium">
                  <CheckCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Hands feel nimble enough for gardening, typing, and opening jars</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-100 font-medium">
                  <CheckCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Ability to enjoy longer recreational walks without fatigue</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-teal-800 text-xs text-teal-300 font-medium italic">
              Key action: Cartilage matrix absorbs moisture &amp; MSM sulfur.
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-2xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-700 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  Phase 3
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Months 3 - 6+
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Structural Support &amp; Freedom</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Full cellular integration. Cartilage matrix integrity is maintained, shielding joint surfaces from age-related mechanical wear.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Long-term joint freedom for golf, travel, and playing with family</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Protection against recurring joint breakdown cycles</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium italic">
              Key action: Continuous collagen synthesis &amp; joint space protection.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
