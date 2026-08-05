import React from 'react';
import { Ingredient } from '../types';
import { X, CheckCircle2, ShieldCheck, BookOpen, Layers } from 'lucide-react';

interface IngredientDetailModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

export const IngredientDetailModal: React.FC<IngredientDetailModalProps> = ({
  ingredient,
  onClose,
}) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block bg-teal-500/30 text-teal-300 border border-teal-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            {ingredient.categoryLabel}
          </span>
          <h3 className="text-2xl font-bold text-white mb-1">{ingredient.name}</h3>
          <p className="text-emerald-300 text-sm font-semibold flex items-center gap-1.5">
            <Layers className="w-4 h-4" /> Clinical Dosage: {ingredient.amount} Per Daily Dose
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
              Primary Role in Joint Matrix
            </h4>
            <p className="text-base text-slate-900 font-semibold bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              "{ingredient.tagline}"
            </p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
              Full Scientific Summary
            </h4>
            <p className="text-sm leading-relaxed text-slate-600">
              {ingredient.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Key Clinical Benefits
            </h4>
            <div className="space-y-2">
              {ingredient.clinicalBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
              Cellular Mechanism of Action
            </h4>
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs sm:text-sm font-medium leading-relaxed">
              {ingredient.mechanism}
            </div>
          </div>

          {ingredient.scientificReference && (
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 italic">
              <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Reference: {ingredient.scientificReference}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 rounded-b-3xl flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};
