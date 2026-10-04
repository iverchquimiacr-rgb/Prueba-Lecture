import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Volume2, VolumeX, Sparkles, BookOpen, MapPin, Compass, Music } from 'lucide-react';
import { BOOKS_DATA } from '../data/booksData';

interface WelcomeScreenProps {
  onEnterWorld: () => void;
  onSelectBook: (slug: string) => void;
  soundEnabled: boolean;
  bgmEnabled: boolean;
  onToggleSound: () => void;
  onToggleBgm: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onEnterWorld,
  onSelectBook,
  soundEnabled,
  bgmEnabled,
  onToggleSound,
  onToggleBgm
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    sound.playEnterWorld();
    setIsTransitioning(true);
    setTimeout(() => {
      onEnterWorld();
    }, 450);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 select-none">
      {/* Background Aurora Landscape */}
      <div 
        className="absolute inset-0 bg-cover bg-center pixelated transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/src/assets/images/lecture_world_aurora_night_1790994959570.jpg')`,
          filter: 'contrast(1.1) brightness(0.95)'
        }}
      >
        {/* Animated Aurora Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-emerald-950/20 mix-blend-color-dodge animate-pulse" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/30 to-slate-950/80" />
        {/* Retro Scanline texture */}
        <div className="absolute inset-0 scanlines opacity-50" />
      </div>

      {/* Top Utility Bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 pixel-border-gold flex items-center justify-center text-slate-950 font-bold font-pixel text-xs">
            LW
          </div>
          <span className="font-silkscreen text-xs md:text-sm tracking-wider text-amber-300 drop-shadow">
            EXPOSICIÓN ESCOLAR DE LITERATURA
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* BGM Toggle */}
          <button
            onClick={onToggleBgm}
            className={`px-3 py-1.5 border-2 text-xs font-pixel flex items-center gap-1.5 cursor-pointer transition-colors ${
              bgmEnabled
                ? 'bg-slate-900/90 border-emerald-500/80 text-emerald-300'
                : 'bg-slate-950/90 border-slate-800 text-slate-500'
            }`}
            title={bgmEnabled ? 'Silenciar música ambiental' : 'Activar música ambiental'}
          >
            <Music className={`w-3.5 h-3.5 ${bgmEnabled ? 'text-emerald-400' : 'text-slate-600'}`} />
            <span className="hidden sm:inline">{bgmEnabled ? 'MÚSICA ON' : 'MÚSICA OFF'}</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            className="px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-700 text-xs font-pixel text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            title={soundEnabled ? 'Silenciar efectos 8-bit' : 'Activar sonido 8-bit'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
          </button>
        </div>
      </header>

      {/* Center Stage: Title & Primary CTA */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center my-auto py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-silkscreen mb-6 tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Experiencia Digital Interactiva & Maquetas QR</span>
        </div>

        {/* Main Title */}
        <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-300 pixel-text-shadow tracking-tight mb-4 max-w-5xl leading-tight">
          THE LECTURE WORLD
        </h1>

        {/* Subtitle */}
        <p className="font-silkscreen text-base sm:text-xl md:text-2xl text-emerald-200 pixel-text-glow-emerald max-w-2xl mb-8 tracking-wider">
          “Explore stories. Discover worlds.”
        </p>

        <p className="font-readable text-xs sm:text-sm text-slate-300 max-w-xl mb-10 leading-relaxed bg-slate-950/70 p-3 border border-slate-800">
          Universo retro pixel art complementario a las maquetas físicas de literatura.
          Explora los mapas, escenas, cartas de personajes y enigmas de cada gran obra.
        </p>

        {/* ENTER THE WORLD Button */}
        <div className="relative group">
          <button
            onClick={handleEnter}
            disabled={isTransitioning}
            className="pixel-btn-action px-8 sm:px-12 py-4 sm:py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-pixel text-sm sm:text-base tracking-widest cursor-pointer group-hover:scale-105 active:scale-95 flex items-center gap-3 transition-transform"
          >
            <Compass className="w-5 h-5 text-slate-950" />
            <span>[ ENTER THE WORLD ]</span>
          </button>
          {/* Pixel glow behind button */}
          <div className="absolute -inset-1 bg-emerald-500/30 blur-sm -z-10 group-hover:bg-emerald-400/50 transition-colors" />
        </div>

        {/* Direct Station Selector for QR / Fast access */}
        <div className="mt-12 w-full max-w-4xl bg-slate-950/80 p-4 border-2 border-slate-800">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
            <span className="font-pixel text-[10px] sm:text-xs text-amber-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              ACCESO RÁPIDO A MAQUETAS (5 OBRAS)
            </span>
            <span className="text-[11px] font-silkscreen text-slate-400">
              Escanea en sala o selecciona una obra
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {BOOKS_DATA.map((book, idx) => (
              <button
                key={book.id}
                onClick={() => {
                  sound.playClickSound?.();
                  onSelectBook(book.slug);
                }}
                className="flex items-center gap-2 p-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400 text-left transition-all group cursor-pointer"
              >
                <div className="w-6 h-6 bg-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 border border-slate-600 flex items-center justify-center font-pixel text-[9px] text-amber-400 shrink-0">
                  {idx + 1}
                </div>
                <div className="truncate flex-1">
                  <div className="font-silkscreen text-xs text-slate-200 group-hover:text-amber-300 truncate">
                    {book.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {book.author || book.genre}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer info */}
      <footer className="relative z-20 px-6 py-3 border-t border-slate-900 bg-slate-950/90 text-center font-silkscreen text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto w-full">
        <span>The Lecture World · Exposición Escolar 2026</span>
        <span className="text-amber-400/80">Pixel Art Literary Companion</span>
      </footer>

      {/* Transition wipe screen */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center animate-in fade-in duration-300">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-none animate-spin mx-auto mb-4" />
            <div className="font-pixel text-sm text-amber-300 tracking-wider">
              CARGANDO MAPA LITERARIO...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
