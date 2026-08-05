import React, { useState, useEffect } from 'react';
import { DailyLogEntry } from '../types';
import { Activity, Plus, Check, Calendar, Trash2, X, TrendingDown, Flame, Sparkles } from 'lucide-react';

interface DailyTrackerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailyTracker: React.FC<DailyTrackerProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<DailyLogEntry[]>([]);
  const [stiffness, setStiffness] = useState<number>(5);
  const [takenDosage, setTakenDosage] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    const saved = localStorage.getItem('jointbrex_daily_logs');
    if (saved) {
      try {
        setLogs(JSON.parse(saved));
      } catch (e) {
        // default empty
      }
    } else {
      // Initial sample log so chart is never empty
      const initialLogs: DailyLogEntry[] = [
        { id: '1', date: 'Day 1', stiffnessLevel: 8, takenDosage: true, notes: 'Morning knee tightness walking down stairs' },
        { id: '2', date: 'Day 3', stiffnessLevel: 7, takenDosage: true, notes: 'Slightly better after morning coffee' },
        { id: '3', date: 'Day 7', stiffnessLevel: 6, takenDosage: true, notes: 'Took 2 miles neighborhood walk' },
        { id: '4', date: 'Day 14', stiffnessLevel: 4, takenDosage: true, notes: 'Hands feeling flexible for gardening' },
      ];
      setLogs(initialLogs);
      localStorage.setItem('jointbrex_daily_logs', JSON.stringify(initialLogs));
    }
  }, []);

  const saveLogsToStorage = (updated: DailyLogEntry[]) => {
    setLogs(updated);
    localStorage.setItem('jointbrex_daily_logs', JSON.stringify(updated));
  };

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    const todayStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const newEntry: DailyLogEntry = {
      id: Date.now().toString(),
      date: todayStr,
      stiffnessLevel: stiffness,
      takenDosage: takenDosage,
      notes: notes.trim(),
    };
    const updated = [newEntry, ...logs];
    saveLogsToStorage(updated);
    setNotes('');
  };

  const handleDeleteLog = (id: string) => {
    const updated = logs.filter((l) => l.id !== id);
    saveLogsToStorage(updated);
  };

  if (!isOpen) return null;

  // Calculate stats
  const averageStiffness = logs.length > 0
    ? (logs.reduce((acc, l) => acc + l.stiffnessLevel, 0) / logs.length).toFixed(1)
    : 'N/A';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="bg-teal-500/30 text-teal-300 border border-teal-400/30 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
              LOCAL PERSISTENCE TRACKER
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-teal-400" /> Daily Joint Comfort Log
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Track your morning stiffness levels and dosage over 30 to 180 days to monitor your mobility progress.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-teal-50 p-4 rounded-2xl border border-teal-200 text-center">
              <span className="text-xs font-bold text-teal-800 uppercase block">Log Entries</span>
              <span className="text-2xl font-extrabold text-teal-950">{logs.length}</span>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-center">
              <span className="text-xs font-bold text-emerald-800 uppercase block">Avg Stiffness Score</span>
              <span className="text-2xl font-extrabold text-emerald-950">{averageStiffness} / 10</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-amber-50 p-4 rounded-2xl border border-amber-200 text-center">
              <span className="text-xs font-bold text-amber-800 uppercase block">Daily Target</span>
              <span className="text-sm font-extrabold text-amber-950">2 Capsules / Day</span>
            </div>
          </div>

          {/* Add Log Form */}
          <form onSubmit={handleAddLog} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Plus className="w-4 h-4 text-teal-700" /> Add Today's Check-in Log
            </h4>

            {/* Stiffness Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-700">Morning Stiffness Rating (1 = None, 10 = Severe):</span>
                <span className="text-teal-700 font-extrabold text-sm">{stiffness} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={stiffness}
                onChange={(e) => setStiffness(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                <span>1 (Smooth Mobility)</span>
                <span>5 (Moderate Tightness)</span>
                <span>10 (High Stiffness)</span>
              </div>
            </div>

            {/* Checkbox Dosage */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="dosageCheck"
                checked={takenDosage}
                onChange={(e) => setTakenDosage(e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
              />
              <label htmlFor="dosageCheck" className="text-xs font-semibold text-slate-800 cursor-pointer">
                I took my 2 JointBrex™ capsules today before a meal
              </label>
            </div>

            {/* Notes input */}
            <div>
              <input
                type="text"
                placeholder="Notes (e.g. walked 2 miles, knees felt great down stairs...)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-teal-800 text-white font-bold text-xs hover:bg-teal-700 transition-colors shadow-2xs"
            >
              Save Today's Check-in
            </button>
          </form>

          {/* Visual Trend Bars */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Mobility Progression Log
            </h4>

            {logs.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No logs recorded yet.</p>
            ) : (
              <div className="space-y-2">
                {logs.map((log) => (
                  <div key={log.id} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900 w-16">{log.date}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-slate-600">Stiffness:</span>
                        <span className={`px-2 py-0.5 rounded-md font-extrabold ${
                          log.stiffnessLevel <= 3
                            ? 'bg-emerald-100 text-emerald-800'
                            : log.stiffnessLevel <= 6
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {log.stiffnessLevel}/10
                        </span>
                      </div>
                      {log.takenDosage && (
                        <span className="hidden sm:inline-flex items-center gap-1 bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-[10px] font-bold">
                          <Check className="w-3 h-3" /> 2 Caps
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 max-w-[150px] sm:max-w-xs truncate italic">
                        {log.notes || 'No notes'}
                      </span>
                      <button
                        onClick={() => handleDeleteLog(log.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Delete entry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-3xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800"
          >
            Close Tracker
          </button>
        </div>
      </div>
    </div>
  );
};
