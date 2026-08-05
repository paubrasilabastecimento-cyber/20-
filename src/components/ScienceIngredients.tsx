import React, { useState } from 'react';
import { INGREDIENTS } from '../data/supplementData';
import { Ingredient, IngredientCategory } from '../types';
import { Info, ArrowUpRight, Zap, ShieldCheck, Sparkles, Layers, Activity } from 'lucide-react';
import { IngredientDetailModal } from './IngredientDetailModal';

export const ScienceIngredients: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  const filteredIngredients = INGREDIENTS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="science" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase mb-4">
            <Activity className="w-4 h-4 text-teal-600" /> Clinical Synergy Formula
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            The 9-Ingredient Joint Matrix Science
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Unlike basic single-ingredient pills, JointBrex™ delivers a tri-layer synergy designed to hydrate cartilage, soothe joint discomfort, and maximize cellular bio-absorption.
          </p>
        </div>

        {/* 3 Pillars Overview Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900">Cartilage Hydration &amp; Matrix</h3>
            <p className="text-sm text-slate-600">
              Glucosamine, Chondroitin, and MSM rebuild worn joint cushions, attracting essential moisture into dry cartilage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900">Enzyme &amp; Inflammation Balance</h3>
            <p className="text-sm text-slate-600">
              Boswellia, Turmeric Curcumin, and Bromelain target 5-LOX and NF-kB pathways to calm everyday stiffness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900">2000% Bio-Absorption Booster</h3>
            <p className="text-sm text-slate-600">
              BioPerine® black pepper extract ensures high-potency nutrients bypass stomach acid and enter bloodstream cells.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All 9 Active Ingredients
          </button>
          <button
            onClick={() => setActiveCategory('structural')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'structural'
                ? 'bg-teal-700 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Structural Matrix Build
          </button>
          <button
            onClick={() => setActiveCategory('botanical')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'botanical'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Botanical Comfort
          </button>
          <button
            onClick={() => setActiveCategory('absorption')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'absorption'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Bio-Absorption
          </button>
        </div>

        {/* Ingredient Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIngredients.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedIngredient(item)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-teal-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md ${
                    item.category === 'structural'
                      ? 'bg-teal-50 text-teal-800 border border-teal-200'
                      : item.category === 'botanical'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {item.categoryLabel}
                  </span>
                  <span className="text-sm font-black text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {item.amount}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2 flex items-center justify-between">
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                <span className="flex items-center gap-1">
                  <Info className="w-4 h-4 text-teal-600" /> View Clinical Breakdown
                </span>
                <span className="text-slate-400 font-normal">Per Daily Dose</span>
              </div>
            </div>
          ))}
        </div>

        {/* BioPerine Absorbency Spotlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 lg:p-10 border border-teal-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-400/30">
                <Zap className="w-4 h-4 text-amber-400" /> Bio-Availability Breakthrough
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Why Standard Turmeric Pills Fail Without BioPerine®
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Raw turmeric curcumin has extremely low water solubility—up to 95% passes straight through your digestive tract without being absorbed. JointBrex™ includes 10mg of patented BioPerine® (black pepper piperine extract), proven in clinical studies to enhance curcumin bio-absorption by <strong>2,000%</strong>.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">Standard Turmeric Pill Absorbency</span>
                  <span className="text-slate-400">~5% Cellular Uptake</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-600 h-full w-[5%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-emerald-400 font-extrabold">JointBrex™ + BioPerine® Matrix</span>
                  <span className="text-emerald-400 font-extrabold">100% High Potency Bio-Uptake</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Ingredient Detail Modal */}
      <IngredientDetailModal
        ingredient={selectedIngredient}
        onClose={() => setSelectedIngredient(null)}
      />
    </section>
  );
};
