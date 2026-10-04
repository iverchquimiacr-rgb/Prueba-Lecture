import React, { useState } from 'react';
import { Book } from '../types/book';
import { sound } from '../utils/sound';
import { Volume2, VolumeX, Music, ArrowLeft, Sparkles, Navigation, BellRing, X } from 'lucide-react';

interface WorldMapProps {
  books: Book[];
  onSelectBook: (slug: string) => void;
  onBackToTitle: () => void;
  soundEnabled: boolean;
  bgmEnabled: boolean;
  onToggleSound: () => void;
  onToggleBgm: () => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  books,
  onSelectBook,
  onBackToTitle,
  soundEnabled,
  bgmEnabled,
  onToggleSound,
  onToggleBgm
}) => {
  // Character sprite position starts near center and travels to hovered works
  const [characterPos, setCharacterPos] = useState({ x: 50, y: 50 });
  const [isWalking, setIsWalking] = useState(false);
  const [activeTargetName, setActiveTargetName] = useState<string | null>(null);
  const [showSecretModal, setShowSecretModal] = useState(false);

  const handleLandmarkHover = (book: Book) => {
    sound.unlockAudio();
    sound.playBlip(580, 0.04);
    setIsWalking(true);
    // Smoothly walk to landmark position with slight vertical offset
    setCharacterPos({ x: book.mapCoords.x, y: book.mapCoords.y + 4 });
    setActiveTargetName(`${book.title} — ${book.author || ''}`);
    setTimeout(() => {
      setIsWalking(false);
    }, 450);
  };

  const handleLandmarkClick = (book: Book) => {
    sound.unlockAudio();
    onSelectBook(book.slug);
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden select-none">
      {/* Top HUD Bar */}
      <header className="sticky top-0 z-30 bg-slate-950/95 border-b-2 border-slate-800 px-4 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Back button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sound.playBack();
                onBackToTitle();
              }}
              className="pixel-btn-action px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-xs font-pixel text-amber-300 flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>INICIO</span>
            </button>
            <div className="hidden sm:block h-5 w-px bg-slate-800" />
            <span className="font-pixel text-xs text-amber-400 hidden sm:inline">
              MAPA DEL MUNDO LITERARIO
            </span>
          </div>

          {/* Target Indicator */}
          <div className="hidden md:flex items-center gap-2 font-silkscreen text-xs text-slate-300 bg-slate-900 px-3 py-1 border border-slate-800">
            <Navigation className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="truncate max-w-sm">
              {activeTargetName ? `DESTINO: ${activeTargetName}` : 'Pasa el cursor sobre una obra para viajar'}
            </span>
          </div>

          {/* Audio HUD Controls */}
          <div className="flex items-center gap-2">
            {/* Background Ambient Music Toggle */}
            <button
              onClick={() => {
                sound.unlockAudio();
                onToggleBgm();
              }}
              className={`px-3 py-1.5 border-2 text-xs font-pixel flex items-center gap-1.5 cursor-pointer transition-colors ${
                bgmEnabled
                  ? 'bg-slate-900 border-emerald-500/80 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}
              title={bgmEnabled ? 'Silenciar música ambiental' : 'Activar música ambiental'}
            >
              <Music className={`w-3.5 h-3.5 ${bgmEnabled ? 'text-emerald-400 animate-bounce' : 'text-slate-600'}`} />
              <span className="hidden sm:inline">{bgmEnabled ? 'MÚSICA ON' : 'MÚSICA OFF'}</span>
            </button>

            {/* Test Audio Chime Button */}
            <button
              onClick={() => sound.testAudioChime()}
              className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-xs font-pixel text-amber-300 flex items-center gap-1 cursor-pointer"
              title="Probar sonido / Verificar audio de tu computadora"
            >
              <BellRing className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden lg:inline text-[9px]">PROBAR AUDIO</span>
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                sound.unlockAudio();
                onToggleSound();
              }}
              className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-xs font-pixel text-slate-300 flex items-center gap-1.5 cursor-pointer"
              title={soundEnabled ? 'Silenciar efectos 8-bit' : 'Activar efectos 8-bit'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-600" />}
              <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Interactive Map Canvas */}
      <main className="relative flex-1 flex flex-col items-center justify-center p-3 sm:p-6 max-w-7xl mx-auto w-full">
        {/* Instruction Banner */}
        <div className="w-full mb-3 flex items-center justify-between bg-slate-900/90 border-2 border-slate-800 px-4 py-2 text-xs font-silkscreen text-slate-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Pasa el cursor por cualquier obra para que tu personaje viaje hacia ella. Haz clic para entrar al portal.</span>
          </div>
          <div className="hidden sm:block text-emerald-400">
            5 ESTACIONES DISPONIBLES
          </div>
        </div>

        {/* The Map Arena */}
        <div className="relative w-full aspect-[16/10] max-h-[76vh] border-4 border-slate-800 overflow-hidden bg-slate-950 shadow-2xl">
          {/* Map Landscape Texture */}
          <div 
            className="absolute inset-0 bg-cover bg-center pixelated opacity-90"
            style={{
              backgroundImage: `url('/src/assets/images/map_world_urban_chaos_1791081629140.jpg')`
            }}
          />

          {/* Cartographic Grid & Retro Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

          {/* MOVING PLAYER CHARACTER SPRITE */}
          <div 
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: `${characterPos.x}%`,
              top: `${characterPos.y}%`
            }}
          >
            <div className="flex flex-col items-center">
              {/* Floating nametag */}
              <div className="px-1.5 py-0.5 bg-slate-950/90 border border-amber-400 text-[8px] font-pixel text-amber-300 whitespace-nowrap mb-1 shadow-md">
                {isWalking ? 'CAMINANDO...' : 'TÚ (VIAJERO)'}
              </div>

              {/* Animated 8-bit Character Sprite */}
              <div className={`w-8 h-8 relative ${isWalking ? 'animate-bounce' : 'animate-pulse'}`} style={{ animationDuration: isWalking ? '0.25s' : '2s' }}>
                <svg viewBox="0 0 16 16" className="w-full h-full pixelated" fill="none">
                  {/* Head */}
                  <rect x="5" y="2" width="6" height="5" fill="#fbd38d" />
                  {/* Skater/Explorer Red Cap */}
                  <rect x="4" y="1" width="8" height="2" fill="#ef4444" />
                  {/* Eyes */}
                  <rect x="6" y="4" width="1" height="1" fill="#000000" />
                  <rect x="9" y="4" width="1" height="1" fill="#000000" />
                  {/* Explorer Tunic */}
                  <rect x="4" y="7" width="8" height="6" fill="#3b82f6" />
                  {/* Book in Hand */}
                  <rect x="2" y="8" width="3" height="4" fill="#fbbf24" stroke="#000" strokeWidth="0.5" />
                  {/* Walking Legs */}
                  <rect x={isWalking ? "4" : "5"} y="13" width="2" height="3" fill="#1e293b" />
                  <rect x={isWalking ? "10" : "9"} y="13" width="2" height="3" fill="#1e293b" />
                </svg>
              </div>
            </div>
          </div>

          {/* 5 LANDMARKS: Semitransparent title & author badges that become fully clear on hover */}
          {books.map((book) => {
            const isTargeted = activeTargetName?.startsWith(book.title);
            return (
              <div
                key={book.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${book.mapCoords.x}%`,
                  top: `${book.mapCoords.y}%`
                }}
                onMouseEnter={() => handleLandmarkHover(book)}
                onClick={() => handleLandmarkClick(book)}
              >
                <div className="flex flex-col items-center">
                  {/* Semitransparent badge: subtle and translucent until hovered */}
                  <div
                    className={`transition-all duration-300 ease-out max-w-[190px] sm:max-w-[230px] text-center ${
                      isTargeted
                        ? 'opacity-100 scale-105 -translate-y-1'
                        : 'opacity-50 group-hover:opacity-100 group-hover:scale-105 group-hover:-translate-y-1'
                    }`}
                  >
                    <div
                      className={`px-3 py-1.5 border transition-all duration-300 backdrop-blur-xs ${
                        isTargeted
                          ? 'bg-slate-950/95 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.7)]'
                          : 'bg-slate-950/60 border-amber-400/40 group-hover:bg-slate-950/95 group-hover:border-amber-300 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.6)]'
                      }`}
                    >
                      <div className="font-pixel text-[9px] sm:text-[11px] text-amber-300/90 group-hover:text-amber-200 leading-tight">
                        {book.title}
                      </div>
                      <div className="font-silkscreen text-[8px] sm:text-[9.5px] text-slate-300/80 group-hover:text-slate-100 mt-0.5 truncate">
                        {book.author}
                      </div>
                    </div>
                  </div>

                  {/* Sleek retro pointer diamond beacon directly below text */}
                  <div
                    className={`w-2.5 h-2.5 border border-slate-950 rotate-45 -mt-1 transition-all duration-300 ${
                      isTargeted
                        ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] scale-110'
                        : 'bg-amber-400/70 group-hover:bg-amber-300 group-hover:scale-110 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
          {/* Secret Mystery Question Mark Button in Corner of Map */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              sound.unlockAudio();
              sound.playClickSound();
              setShowSecretModal(true);
            }}
            className="absolute bottom-3 left-3 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-slate-950/90 hover:bg-amber-400 border-2 border-amber-400/80 hover:border-amber-300 text-amber-300 hover:text-slate-950 font-pixel text-xs sm:text-sm flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-200 hover:scale-110 active:scale-95 group"
            title="¿Misterio en el mapa?"
          >
            <span className="font-pixel font-bold group-hover:scale-110 transition-transform">?</span>
          </button>
        </div>

        {/* Minimalist Bottom Bar with direct access buttons */}
        <div className="w-full mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2">
          {books.map((b, i) => (
            <button
              key={b.id}
              onClick={() => handleLandmarkClick(b)}
              onMouseEnter={() => handleLandmarkHover(b)}
              className="p-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-400 text-left transition-colors cursor-pointer group"
            >
              <div className="font-pixel text-[9px] text-amber-400 group-hover:text-amber-300 truncate">
                {i + 1}. {b.title}
              </div>
              <div className="font-silkscreen text-[9px] text-slate-300 truncate">
                {b.author}
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Secret Mystery Popup Modal */}
      {showSecretModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative max-w-md w-full bg-slate-950 border-4 border-amber-400 p-6 shadow-[0_0_40px_rgba(245,158,11,0.4)] text-center">
            {/* Close button */}
            <button
              onClick={() => {
                sound.playBack();
                setShowSecretModal(false);
              }}
              className="absolute top-2.5 right-2.5 p-1.5 text-slate-400 hover:text-amber-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Retro question mark badge */}
            <div className="w-12 h-12 mx-auto mb-3 border-2 border-amber-400 bg-amber-400/10 flex items-center justify-center text-amber-400 font-pixel text-2xl shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              ?
            </div>

            <div className="font-pixel text-xs text-amber-400 mb-2 tracking-widest uppercase">
              AVISO DEL CARTÓGRAFO
            </div>

            <div className="font-pixel text-base sm:text-lg text-emerald-400 mb-4 py-2 border-y-2 border-dashed border-slate-800 tracking-wide">
              «Próxima actualización el próximo año»
            </div>

            <p className="font-silkscreen text-xs text-slate-300 leading-relaxed mb-6">
              Nuevos mundos literarios, maquetas interactivas y grandes clásicos de la literatura universal están siendo preparados para la siguiente edición escolar. ¡Gracias por explorar con nosotros!
            </p>

            <button
              onClick={() => {
                sound.playBack();
                setShowSecretModal(false);
              }}
              className="pixel-btn-action px-6 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-pixel text-xs cursor-pointer border-2 border-amber-300 uppercase tracking-wider"
            >
              ¡ENTENDIDO!
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 px-4 py-2 text-center font-silkscreen text-[11px] text-slate-500">
        The Lecture World · Mapa Interactivo
      </footer>
    </div>
  );
};
