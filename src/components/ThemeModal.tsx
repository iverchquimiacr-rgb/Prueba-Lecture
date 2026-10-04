import React from 'react';
import { ThemeItem } from '../types/book';
import { sound } from '../utils/sound';
import { Lightbulb, ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

interface ThemeModalProps {
  theme: ThemeItem;
  bookTitle: string;
  onClose: () => void;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ theme, bookTitle, onClose }) => {
  const handleClose = () => {
    sound.playBack();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border-4 border-emerald-500/90 shadow-[0_0_30px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Header Bar */}
        <div className="bg-slate-950 border-b-2 border-emerald-500/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span className="font-pixel text-[11px] sm:text-xs text-emerald-300">
              CONCEPTO Y TEMA CENTRAL
            </span>
          </div>

          <button
            onClick={handleClose}
            className="font-pixel text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 hover:bg-rose-900/60 border border-slate-700 cursor-pointer"
          >
            × CERRAR
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Title & Icon */}
          <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
            <div className="w-14 h-14 bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-3xl shrink-0 shadow-md">
              {theme.icon}
            </div>

            <div>
              <span className="font-silkscreen text-[10px] text-slate-400 uppercase tracking-widest block">
                Tema en «{bookTitle}»
              </span>
              <h2 className="font-pixel text-sm sm:text-base text-emerald-300">
                {theme.name}
              </h2>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-pixel text-[10px] sm:text-xs text-amber-300">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CÓMO APARECE EN LA OBRA</span>
            </div>
            <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 border border-slate-800">
              {theme.description}
            </p>
          </div>

          {/* Exhibition Reflection */}
          {theme.literaryReflection && (
            <div className="p-4 bg-slate-950/90 border-2 border-amber-500/40 space-y-1">
              <div className="flex items-center gap-2 font-pixel text-[10px] text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>REFLEXIÓN PARA LA EXPOSICIÓN</span>
              </div>
              <p className="font-readable text-xs sm:text-sm text-amber-100/90 leading-relaxed italic">
                {theme.literaryReflection}
              </p>
            </div>
          )}

          {/* Close Action */}
          <div className="pt-2 flex justify-start">
            <button
              onClick={handleClose}
              className="pixel-btn-action px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-pixel text-xs tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>[ ← VOLVER A LA OBRA ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
