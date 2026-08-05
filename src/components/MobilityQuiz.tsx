import React, { useState } from 'react';
import { QuizState, ProductPackage } from '../types';
import { PRODUCT_PACKAGES } from '../data/supplementData';
import { Zap, CheckCircle2, ArrowRight, RotateCcw, Award, ShieldCheck, Sparkles } from 'lucide-react';
import bottleMockupImg from '../assets/images/jointbrex_bottle_mockup_1785962311326.jpg';

interface MobilityQuizProps {
  onSelectPackage: (pkg: ProductPackage, directCheckout?: boolean) => void;
}

export const MobilityQuiz: React.FC<MobilityQuizProps> = ({ onSelectPackage }) => {
  const [step, setStep] = useState<number>(1);
  const [quizState, setQuizState] = useState<QuizState>({
    stiffnessAreas: [],
    duration: '',
    activityLevel: '',
    primaryGoal: '',
  });

  const areasList = [
    { id: 'knees', label: 'Knees & Stairs', icon: '🦵' },
    { id: 'hips', label: 'Hips & Pelvis', icon: '🚶' },
    { id: 'hands', label: 'Hands, Wrists & Fingers', icon: '🖐️' },
    { id: 'back', label: 'Lower Back & Spine', icon: '🧘' },
    { id: 'shoulders', label: 'Shoulders & Neck', icon: '💪' },
  ];

  const durationOptions = [
    'Less than 6 months',
    '6 months to 1 year',
    '1 to 3 years',
    'Over 3 years of persistent discomfort',
  ];

  const activityOptions = [
    'Mostly sedentary / sitting',
    'Light daily walking & chores',
    'Moderate workouts / golf / swimming',
    'Heavy physical labor or high impact sports',
  ];

  const goalOptions = [
    'Walk up & down stairs without knee stiffness',
    'Garden, cook & use hands comfortably',
    'Play golf, tennis or outdoor sports',
    'Keep up with children & grandchildren',
  ];

  const toggleArea = (id: string) => {
    setQuizState((prev) => {
      const exists = prev.stiffnessAreas.includes(id);
      return {
        ...prev,
        stiffnessAreas: exists
          ? prev.stiffnessAreas.filter((a) => a !== id)
          : [...prev.stiffnessAreas, id],
      };
    });
  };

  const handleReset = () => {
    setStep(1);
    setQuizState({
      stiffnessAreas: [],
      duration: '',
      activityLevel: '',
      primaryGoal: '',
    });
  };

  const recommendedPackage = quizState.stiffnessAreas.length >= 2 || quizState.duration.includes('1 to 3') || quizState.duration.includes('Over 3')
    ? PRODUCT_PACKAGES.find((p) => p.isBestValue) || PRODUCT_PACKAGES[2]
    : PRODUCT_PACKAGES.find((p) => p.isPopular) || PRODUCT_PACKAGES[1];

  return (
    <section id="quiz" className="py-16 lg:py-24 bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Quiz Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" /> Interactive Assessment Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Personalized Joint Mobility &amp; Dosage Protocol
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Answer 4 quick questions to evaluate your joint cartilage hydration needs and see your recommended JointBrex™ supply.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Progress Bar */}
          {step <= 4 && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-extrabold text-slate-400 uppercase mb-2">
                <span>Step {step} of 4</span>
                <span>{step === 1 ? 'Stiffness Areas' : step === 2 ? 'Duration' : step === 3 ? 'Activity Level' : 'Primary Goal'}</span>
              </div>
              <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white">
                1. Where do you experience daily joint tightness or discomfort?
              </h3>
              <p className="text-xs text-slate-400">Select all that apply:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {areasList.map((area) => {
                  const isSelected = quizState.stiffnessAreas.includes(area.id);
                  return (
                    <button
                      key={area.id}
                      onClick={() => toggleArea(area.id)}
                      className={`flex items-center gap-3.5 p-4 rounded-xl border font-bold text-sm text-left transition-all ${
                        isSelected
                          ? 'bg-teal-600/30 border-teal-400 text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <span className="text-2xl">{area.icon}</span>
                      <span className="flex-1">{area.label}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-teal-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  disabled={quizState.stiffnessAreas.length === 0}
                  onClick={() => setStep(2)}
                  className="px-8 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white">
                2. How long have you been noticing this stiffness?
              </h3>

              <div className="space-y-3">
                {durationOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setQuizState((prev) => ({ ...prev, duration: opt }));
                      setStep(3);
                    }}
                    className={`w-full p-4 rounded-xl border text-left font-semibold text-sm transition-all flex items-center justify-between ${
                      quizState.duration === opt
                        ? 'bg-teal-600/30 border-teal-400 text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white">
                3. What best describes your daily activity level?
              </h3>

              <div className="space-y-3">
                {activityOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setQuizState((prev) => ({ ...prev, activityLevel: opt }));
                      setStep(4);
                    }}
                    className={`w-full p-4 rounded-xl border text-left font-semibold text-sm transition-all flex items-center justify-between ${
                      quizState.activityLevel === opt
                        ? 'bg-teal-600/30 border-teal-400 text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white">
                4. What is your #1 mobility goal with JointBrex™?
              </h3>

              <div className="space-y-3">
                {goalOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setQuizState((prev) => ({ ...prev, primaryGoal: opt }));
                      setStep(5); // Results!
                    }}
                    className={`w-full p-4 rounded-xl border text-left font-semibold text-sm transition-all flex items-center justify-between ${
                      quizState.primaryGoal === opt
                        ? 'bg-teal-600/30 border-teal-400 text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {/* RESULTS SCREEN (STEP 5) */}
          {step === 5 && (
            <div className="space-y-6 text-center animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  Assessment Complete
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Recommended Joint Support Protocol: {recommendedPackage.supplyDays}-Day Supply
                </h3>
              </div>

              {/* Assessment Summary Box */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700 text-left space-y-3 text-sm text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Stiffness Focus Areas:</span>
                  <span className="font-bold text-white capitalize">
                    {quizState.stiffnessAreas.join(', ') || 'General Joints'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Recommended Daily Intake:</span>
                  <span className="font-bold text-emerald-400">2 Capsules Daily (Morning Meal)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Expected Initial Results:</span>
                  <span className="font-bold text-amber-300">4 to 6 Weeks</span>
                </div>
              </div>

              {/* Recommended Package Card Banner */}
              <div className="bg-gradient-to-r from-teal-900 to-slate-900 border-2 border-amber-400/80 rounded-2xl p-6 text-left flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={bottleMockupImg}
                  alt="JointBrex Bottle"
                  className="w-24 h-24 object-contain rounded-xl shadow-md border border-white/20 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 space-y-1">
                  <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">
                    BEST MATCH FOR YOUR PROFILE
                  </span>
                  <h4 className="font-bold text-xl text-white">
                    {recommendedPackage.bottles} Bottles ({recommendedPackage.supplyDays}-Day Protocol)
                  </h4>
                  <p className="text-xs text-slate-300">
                    Includes Free US Express Shipping + 60-Day Money-Back Guarantee
                  </p>
                  <p className="text-lg font-black text-emerald-300 pt-1">
                    ${recommendedPackage.pricePerBottle}/bottle (Total: ${recommendedPackage.totalPrice})
                  </p>
                </div>

                <button
                  onClick={() => onSelectPackage(recommendedPackage, true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shrink-0 transition-all"
                >
                  CLAIM YOUR RECOMMENDED SUPPLY
                </button>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Mobility Quiz
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
