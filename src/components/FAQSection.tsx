import React, { useState } from 'react';
import { FAQS } from '../data/supplementData';
import { ChevronDown, Search, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4 text-slate-600" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Everything you need to know about JointBrex™ ordering, ingredients, shipping, and our 60-day money-back guarantee.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. dosage, shellfish, shipping, guarantee)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                categoryFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Questions
            </button>
            <button
              onClick={() => setCategoryFilter('usage')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                categoryFilter === 'usage'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Usage &amp; Dosage
            </button>
            <button
              onClick={() => setCategoryFilter('ingredients')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                categoryFilter === 'ingredients'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Ingredients &amp; Allergens
            </button>
            <button
              onClick={() => setCategoryFilter('guarantee')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                categoryFilter === 'guarantee'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              60-Day Guarantee
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <p className="text-center py-8 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}".
            </p>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-50/80 rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-teal-700 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Money Back Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center flex flex-col items-center space-y-3 shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Risk-Free 60-Day Money-Back Guarantee
          </h3>
          <p className="text-sm text-slate-600 max-w-xl">
            Try JointBrex™ for up to 60 full days. If you aren't thoroughly satisfied with your joint comfort and mobility progress, send back your empty or full bottles for a prompt, hassle-free 100% refund.
          </p>
        </div>

      </div>
    </section>
  );
};
