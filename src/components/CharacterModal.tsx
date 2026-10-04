import React from 'react';
import { Character } from '../types/book';
import { PixelGraphic } from './PixelGraphic';
import { sound } from '../utils/sound';
import { ArrowLeft, Sparkles, BookOpen, Quote, Award } from 'lucide-react';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  const handleClose = () => {
    sound.playBack();
    onClose();
  };

  const roleColorMap: Record<string, string> = {
    'Protagonista': 'text-amber-400 border-amber-400 bg-amber-950/40',
    'Antagonista': 'text-rose-400 border-rose-400 bg-rose-950/40',
    'Conciencia moral y Redención': 'text-emerald-400 border-emerald-400 bg-emerald-950/40',
    'Mentor': 'text-cyan-400 border-cyan-400 bg-cyan-950/40',
    'secundario': 'text-slate-300 border-slate-600 bg-slate-900',
    'clave': 'text-purple-400 border-purple-400 bg-purple-950/40'
  };

  const badgeStyle = roleColorMap[character.role] || 'text-amber-400 border-amber-400 bg-amber-950/40';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border-4 border-amber-500/90 shadow-[0_0_30px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Header Bar */}
        <div className="bg-slate-950 border-b-2 border-amber-500/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-pixel text-[11px] sm:text-xs text-amber-300">
              FICHA DE PERSONAJE · DOSSIER
            </span>
          </div>

          <button
            onClick={handleClose}
            className="font-pixel text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 hover:bg-rose-900/60 border border-slate-700 cursor-pointer"
          >
            × CERRAR
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Top Banner: Portrait & Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b-2 border-slate-800 pb-6">
            {/* Pixel Portrait with retro gold frame */}
            <div className="relative shrink-0 p-2 bg-slate-950 border-3 border-amber-400 shadow-lg">
              <PixelGraphic type={character.image} size="lg" />
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-400 text-slate-950 font-pixel text-[8px] whitespace-nowrap">
                {character.importance.toUpperCase()}
              </div>
            </div>

            {/* Name & Function */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <h2 className="font-pixel text-base sm:text-lg text-amber-300 leading-snug">
                {character.name}
              </h2>

              <div className="inline-block px-3 py-1 border font-silkscreen text-xs font-semibold tracking-wider uppercase mb-2">
                <span className={badgeStyle}>
                  FUNCIÓN: {character.role}
                </span>
              </div>

              {character.quote && (
                <div className="p-3 bg-slate-950/80 border-l-4 border-amber-400 font-readable text-xs sm:text-sm text-amber-200 italic mt-2">
                  <Quote className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
                  {character.quote}
                </div>
              )}
            </div>
          </div>

          {/* Characteristics section */}
          <div>
            <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] sm:text-xs text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CARACTERÍSTICAS PRINCIPALES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {character.traits.map((trait, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-2.5 bg-slate-950 border border-slate-800 font-readable text-xs sm:text-sm text-slate-200"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What does this character teach us? */}
          <div className="p-4 bg-slate-950/90 border-2 border-emerald-500/50">
            <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] sm:text-xs text-emerald-300">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>¿QUÉ NOS ENSEÑA?</span>
            </div>
            <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed">
              {character.teaching}
            </p>
          </div>

          {/* Bottom Action: Return button */}
          <div className="pt-2 flex justify-center sm:justify-start">
            <button
              onClick={handleClose}
              className="pixel-btn-action px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-pixel text-xs tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>[ ← VOLVER A PERSONAJES ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
