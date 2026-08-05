import React from 'react';
import { ShieldCheck, Lock, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-700 text-white font-bold text-lg flex items-center justify-center">
                J
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                JOINT<span className="text-teal-400">BREX</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Advanced Joint Health &amp; Cartilage Mobility Matrix formulated with 9 clinically studied botanical and structural ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#packages" className="hover:text-white transition-colors">Savings Packages</a></li>
              <li><a href="#science" className="hover:text-white transition-colors">Ingredients &amp; Science</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Mobility Quiz</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Expected Timeline</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider">Customer Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Toll-Free USA: 1-800-555-BREX</li>
              <li>Email: support@jointbrex.com</li>
              <li>Hours: Mon - Fri (9am - 7pm EST)</li>
              <li>Returns: 60-Day Money Back Address</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider">Quality Standards</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>FDA-Registered Facility (USA)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-teal-400" />
                <span>GMP Quality Certified Manufacturing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dietary Supplement FDA Disclaimer */}
        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3 leading-relaxed text-slate-400 text-[11px]">
          <h5 className="font-bold text-slate-300 uppercase tracking-wider">FDA Health &amp; Safety Disclaimer</h5>
          <p>
            *These statements have not been evaluated by the Food and Drug Administration. JointBrex™ is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease, arthritis, or medical condition. Results may vary depending on individual biological factors, consistent daily dosage, and lifestyle.
          </p>
          <p>
            Glucosamine in JointBrex™ is derived from crustacean shellfish (shrimp/crab). If you have a known shellfish allergy or take blood thinners, consult your healthcare physician prior to starting any dietary supplement.
          </p>
        </div>

        {/* Copyright & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 pt-4">
          <p>© {new Date().getFullYear()} JointBrex™ Advanced Joint Health. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Shipping &amp; Returns</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
