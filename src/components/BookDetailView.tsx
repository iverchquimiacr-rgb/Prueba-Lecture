import React, { useState } from 'react';
import { Book, Character, ThemeItem, BookSectionDefinition } from '../types/book';
import { PixelSceneIllustration } from './PixelSceneIllustration';
import { PixelGraphic } from './PixelGraphic';
import { CharacterModal } from './CharacterModal';
import { ThemeModal } from './ThemeModal';
import { DioramaQRModal } from './DioramaQRModal';
import { sound } from '../utils/sound';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Lightbulb, 
  QrCode, 
  MapPin, 
  Sparkles,
  Info,
  Maximize2,
  Volume2,
  VolumeX,
  Music,
  ScrollText,
  Calendar,
  Layers,
  Feather,
  Copy,
  Check,
  Compass,
  FileText
} from 'lucide-react';

interface BookDetailViewProps {
  book: Book;
  onBackToMap: () => void;
  soundEnabled: boolean;
  bgmEnabled: boolean;
  onToggleSound: () => void;
  onToggleBgm: () => void;
}

// Extensible sections architecture: includes Historia, Personajes, Temas y Análisis
const BASE_SECTIONS: BookSectionDefinition[] = [
  { key: 'historia', label: 'HISTORIA', icon: '📖', description: 'Escenas narrativas y progreso de la maqueta' },
  { key: 'personajes', label: 'PERSONAJES', icon: '👥', description: 'Cartas y dossier de figuras clave' },
  { key: 'temas', label: 'TEMAS', icon: '💡', description: 'Dilemas filosóficos y conceptos centrales' },
  { key: 'analisis', label: 'ANÁLISIS', icon: '📜', description: 'Ficha técnica y análisis literario formal' }
];

export const BookDetailView: React.FC<BookDetailViewProps> = ({ 
  book, 
  onBackToMap,
  soundEnabled,
  bgmEnabled,
  onToggleSound,
  onToggleBgm
}) => {
  const [activeSection, setActiveSection] = useState<'historia' | 'personajes' | 'temas' | string>('historia');
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeItem | null>(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [copiedAnalysis, setCopiedAnalysis] = useState(false);

  const totalScenes = book.scenes.length;
  const currentScene = book.scenes[currentSceneIndex] || book.scenes[0];

  const handleCopyAnalysis = () => {
    if (!book.analysis) return;
    const a = book.analysis;
    const textToCopy = `FICHA DE ANÁLISIS LITERARIO - THE LECTURE WORLD
===================================================
• Obra: ${a.workTitle}
• Autor: ${a.author}
• Año de publicación: ${a.publicationYear}
• Tipo de composición: ${a.compositionType}
• Corriente literaria: ${a.literaryMovement}
• Estructura: ${a.structure}
• Tipo de narrador: ${a.narratorType}
• Tono y atmósfera: ${a.predominantTone}
• Género / Especie: ${a.literaryGenre || book.genre}
• Recursos estilísticos: ${a.stylisticNotes || 'No especificado'}
===================================================
Estación de Exposición Escolar: ${book.dioramaStation}`;

    navigator.clipboard?.writeText(textToCopy);
    sound.playCardSelect();
    setCopiedAnalysis(true);
    setTimeout(() => setCopiedAnalysis(false), 2500);
  };

  const handlePrevScene = () => {
    if (currentSceneIndex > 0) {
      sound.playSlide();
      setCurrentSceneIndex(prev => prev - 1);
    }
  };

  const handleNextScene = () => {
    if (currentSceneIndex < totalScenes - 1) {
      sound.playSlide();
      setCurrentSceneIndex(prev => prev + 1);
    }
  };

  const handleSelectScene = (index: number) => {
    sound.playSlide();
    setCurrentSceneIndex(index);
  };

  const handleSectionChange = (key: string) => {
    sound.playBlip(540, 0.05);
    setActiveSection(key);
  };

  const handleCardClick = (character: Character) => {
    sound.playCardSelect();
    setSelectedCharacter(character);
  };

  const handleThemeClick = (theme: ThemeItem) => {
    sound.playCardSelect();
    setSelectedTheme(theme);
  };

  // Generate ASCII/Pixel block visual string for progress bar
  const renderPixelBarBlocks = () => {
    const totalBlocks = 12;
    const filledBlocks = Math.round(((currentSceneIndex + 1) / totalScenes) * totalBlocks);
    return Array.from({ length: totalBlocks }).map((_, idx) => (
      <span
        key={idx}
        className={`w-3.5 sm:w-5 h-4 sm:h-5 border border-slate-950 inline-block transition-colors duration-200 ${
          idx < filledBlocks ? 'bg-amber-400' : 'bg-slate-800'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-slate-950/95 border-b-2 border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back to map action */}
          <button
            onClick={() => {
              sound.playBack();
              onBackToMap();
            }}
            className="pixel-btn-action px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-xs font-pixel text-amber-300 flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← VOLVER AL MAPA</span>
          </button>

          {/* Book Identity in Top Bar */}
          <div className="flex-1 text-center px-2 min-w-[200px]">
            <h1 className="font-pixel text-xs sm:text-base text-amber-300 truncate">
              {book.title}
            </h1>
            {book.author && (
              <span className="font-silkscreen text-[11px] text-slate-400 block truncate">
                {book.author}
              </span>
            )}
          </div>

          {/* Diorama Station QR & Audio controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleBgm}
              className={`px-2.5 py-1.5 border-2 text-xs font-pixel flex items-center gap-1 cursor-pointer transition-colors ${
                bgmEnabled
                  ? 'bg-slate-900 border-emerald-500/80 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}
              title={bgmEnabled ? 'Silenciar música temática' : 'Activar música temática'}
            >
              <Music className={`w-3.5 h-3.5 ${bgmEnabled ? 'text-emerald-400' : 'text-slate-600'}`} />
              <span className="hidden md:inline">{bgmEnabled ? 'MÚSICA' : 'MÚSICA OFF'}</span>
            </button>

            <button
              onClick={onToggleSound}
              className="px-2 py-1.5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-xs font-pixel text-slate-300 flex items-center gap-1 cursor-pointer"
              title={soundEnabled ? 'Silenciar efectos' : 'Activar efectos'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-600" />}
            </button>

            <button
              onClick={() => {
                sound.playBlip(700, 0.05);
                setShowQRModal(true);
              }}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border-2 border-amber-400/70 text-xs font-pixel text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Ver código QR para conectar con la maqueta física"
            >
              <QrCode className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">QR MAQUETA</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 space-y-6">
        {/* Diorama Station Kicker & Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-900/80 border-2 border-slate-800 text-xs font-silkscreen">
          <div className="flex items-center gap-2 text-emerald-400">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="text-amber-300">{book.dioramaStation}</span>
          </div>
          <div className="text-slate-400 italic font-readable text-xs">
            {book.tagline}
          </div>
        </div>

        {/* SECTION 5 LAYOUT SPEC:
            ┌───────────────────────────────────────────────┐
            │   MENÚ DE SECCIONES   │   IMAGEN PRINCIPAL   │
            │   📖 HISTORIA         │   DE LA OBRA         │
            │   👥 PERSONAJES       │                      │
            │   💡 TEMAS            │                      │
            └───────────────────────────────────────────────┘
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Navigation Menu */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-slate-900 border-3 border-slate-800 p-4 space-y-4">
            <div>
              <div className="font-pixel text-[10px] sm:text-xs text-amber-400 pb-2 mb-3 border-b border-slate-800 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXPLORACIÓN DE LA OBRA</span>
              </div>

              <nav className="flex flex-col gap-2.5">
                {BASE_SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.key;
                  return (
                    <button
                      key={sec.key}
                      onClick={() => handleSectionChange(sec.key)}
                      className={`w-full p-3 text-left font-pixel text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer border-2 ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-[0_4px_0_0_#92400e] translate-x-1'
                          : 'bg-slate-950/70 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">{sec.icon}</span>
                        <span>{sec.label}</span>
                      </div>
                      {isActive && <span className="font-mono text-xs">▶</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Summary Pill & Info */}
            <div className="p-3 bg-slate-950 border border-slate-800">
              <span className="font-silkscreen text-[10px] text-amber-400 block mb-1">
                SINOPSIS GENERAL
              </span>
              <p className="font-readable text-xs text-slate-300 line-clamp-4 leading-relaxed">
                {book.shortSummary}
              </p>
            </div>
          </div>

          {/* Right Column: Large Main Image of the Book */}
          <div className="lg:col-span-8 relative bg-slate-900 border-3 border-slate-800 overflow-hidden min-h-[260px] sm:min-h-[320px] flex items-center justify-center group">
            {/* Main book artwork */}
            <img
              src={book.coverImage}
              alt={`Ilustración pixel art de ${book.title}`}
              className="w-full h-full object-cover pixelated opacity-95 group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Subtle retro scanline and gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            {/* Badge overlay on bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="bg-slate-950/90 border border-amber-400 px-3 py-1.5 font-pixel text-[10px] text-amber-300">
                {book.title.toUpperCase()}
              </div>
              <div className="bg-slate-950/90 border border-slate-700 px-2 py-1 font-silkscreen text-[9px] text-emerald-400 hidden sm:block">
                ESTILO PIXEL ART 16-BIT
              </div>
            </div>
          </div>
        </div>

        {/* SECTION CONTENT CONTAINER */}
        <div className="border-3 border-slate-800 bg-slate-900/90 p-4 sm:p-6 shadow-xl">
          {/* ========================================== */}
          {/* SECTION 1: 📖 HISTORIA (CAROUSEL)          */}
          {/* ========================================== */}
          {activeSection === 'historia' && (
            <div className="space-y-6">
              {/* Scene Carousel Navigation Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b-2 border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-xs sm:text-sm text-amber-400">
                    ESCENAS DE LA OBRA
                  </span>
                  <span className="font-silkscreen text-xs text-slate-400">
                    ({totalScenes} momentos clave)
                  </span>
                </div>

                {/* Horizontal Scene Buttons [ESCENA 1] [ESCENA 2] ... */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {book.scenes.map((sc, i) => (
                    <button
                      key={sc.id}
                      onClick={() => handleSelectScene(i)}
                      className={`px-2.5 py-1 text-[10px] sm:text-xs font-pixel cursor-pointer border-2 transition-all ${
                        currentSceneIndex === i
                          ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_2px_0_0_#92400e]'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-amber-400'
                      }`}
                    >
                      ESCENA {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Scene Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-950 border-3 border-slate-800 p-4 sm:p-6">
                {/* Scene Pixel Illustration */}
                <div className="md:col-span-6 relative aspect-video border-2 border-slate-700 overflow-hidden shadow-inner">
                  <PixelSceneIllustration
                    sceneId={currentScene.id}
                    title={currentScene.title}
                    bookSlug={book.slug}
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/90 border border-amber-400 px-2 py-0.5 font-pixel text-[9px] text-amber-300">
                    ESCENA {currentSceneIndex + 1} DE {totalScenes}
                  </div>
                </div>

                {/* Scene Narrative Information */}
                <div className="md:col-span-6 space-y-4">
                  <div>
                    <span className="font-silkscreen text-xs text-emerald-400 tracking-wider block mb-1">
                      MOMENTO NARRATIVO
                    </span>
                    <h3 className="font-pixel text-sm sm:text-base text-amber-300 leading-snug">
                      {currentScene.title}
                    </h3>
                  </div>

                  <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/80 p-4 border border-slate-800">
                    {currentScene.description}
                  </p>

                  {/* Physical Diorama Connection Note */}
                  {currentScene.dioramaDetail && (
                    <div className="p-3 bg-amber-950/20 border-l-4 border-amber-400 font-readable text-xs text-amber-200/90 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-silkscreen text-[11px] text-amber-300 block mb-0.5">
                          CONEXIÓN CON LA MAQUETA:
                        </strong>
                        {currentScene.dioramaDetail}
                      </div>
                    </div>
                  )}

                  {/* Prev / Next Carousel Controls */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={handlePrevScene}
                      disabled={currentSceneIndex === 0}
                      className={`pixel-btn-action px-4 py-2 font-pixel text-xs flex items-center gap-1.5 cursor-pointer ${
                        currentSceneIndex === 0
                          ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>ANTERIOR</span>
                    </button>

                    <span className="font-pixel text-xs text-slate-400">
                      {currentSceneIndex + 1} / {totalScenes}
                    </span>

                    <button
                      onClick={handleNextScene}
                      disabled={currentSceneIndex === totalScenes - 1}
                      className={`pixel-btn-action px-4 py-2 font-pixel text-xs flex items-center gap-1.5 cursor-pointer ${
                        currentSceneIndex === totalScenes - 1
                          ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
                          : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                      }`}
                    >
                      <span>SIGUIENTE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* PROGRESS BAR SECTION (As specified in requirement 6):
                  ESCENA 2 / 5
                  ████████░░░░░░
                  Sensación de nivel de videojuego
              */}
              <div className="p-4 bg-slate-950 border-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-pixel text-xs text-amber-400">
                    PROGRESO DEL NIVEL:
                  </span>
                  <span className="font-mono font-bold text-xs text-emerald-400 bg-slate-900 px-2 py-0.5 border border-slate-700">
                    ESCENA {currentSceneIndex + 1} / {totalScenes}
                  </span>
                </div>

                {/* Pixelated Progress Bar */}
                <div className="flex items-center gap-1">
                  {renderPixelBarBlocks()}
                </div>

                <div className="font-silkscreen text-[11px] text-slate-400">
                  {Math.round(((currentSceneIndex + 1) / totalScenes) * 100)}% COMPLETADO
                </div>
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* SECTION 2: 👥 PERSONAJES (CARD GRID)      */}
          {/* ========================================== */}
          {activeSection === 'personajes' && (
            <div className="space-y-6">
              <div className="border-b-2 border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-pixel text-xs sm:text-sm text-amber-300">
                    CARTAS DE PERSONAJES
                  </h3>
                  <span className="font-silkscreen text-[11px] text-slate-400">
                    Haz clic en cualquier carta para desplegar su ficha y dossier completo
                  </span>
                </div>
                <div className="font-pixel text-xs text-emerald-400 bg-slate-950 px-2 py-1 border border-slate-800">
                  {book.characters.length} CARTAS
                </div>
              </div>

              {/* Grid of video-game style character cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {book.characters.map((char) => (
                  <div
                    key={char.id}
                    onClick={() => handleCardClick(char)}
                    className="pixel-card bg-slate-950 p-3 flex flex-col items-center text-center cursor-pointer group hover:border-amber-400 transition-all"
                  >
                    {/* Character Pixel Portrait */}
                    <div className="relative p-1.5 bg-slate-900 border-2 border-slate-700 group-hover:border-amber-400 mb-3 shadow-md">
                      <PixelGraphic type={char.image} size="md" />
                      <div className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-none opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Name */}
                    <h4 className="font-pixel text-xs text-amber-300 group-hover:text-amber-200 line-clamp-2 min-h-[32px] mb-1">
                      {char.name}
                    </h4>

                    {/* Role / Importance */}
                    <div className="px-2 py-0.5 bg-slate-900 border border-slate-800 font-silkscreen text-[9px] text-slate-300 uppercase tracking-wider mb-2">
                      {char.role}
                    </div>

                    {/* Bottom Prompt */}
                    <div className="mt-auto w-full pt-2 border-t border-slate-800 font-silkscreen text-[9px] text-emerald-400 group-hover:text-emerald-300 flex items-center justify-center gap-1">
                      <span>VER FICHA</span>
                      <span>▶</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* SECTION 3: 💡 TEMAS (VISUAL RELICS)       */}
          {/* ========================================== */}
          {activeSection === 'temas' && (
            <div className="space-y-6">
              <div className="border-b-2 border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-pixel text-xs sm:text-sm text-emerald-300">
                    TEMAS Y DILEMAS CENTRALES
                  </h3>
                  <span className="font-silkscreen text-[11px] text-slate-400">
                    Conceptos filosóficos y reflexiones que sustentan la exposición escolar
                  </span>
                </div>
              </div>

              {/* Thematic Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {book.themes.map((theme) => (
                  <div
                    key={theme.id}
                    onClick={() => handleThemeClick(theme)}
                    className="pixel-card bg-slate-950 p-6 flex flex-col items-center text-center cursor-pointer border-2 border-slate-700 hover:border-emerald-400 transition-all group"
                  >
                    {/* Thematic Icon in pixel frame */}
                    <div className="w-16 h-16 bg-slate-900 border-2 border-emerald-500/70 group-hover:border-emerald-400 flex items-center justify-center text-4xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      {theme.icon}
                    </div>

                    <h4 className="font-pixel text-xs sm:text-sm text-amber-300 group-hover:text-emerald-300 mb-2">
                      {theme.name}
                    </h4>

                    <p className="font-readable text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {theme.description}
                    </p>

                    <div className="mt-auto px-3 py-1.5 bg-slate-900 border border-emerald-500/40 font-silkscreen text-[10px] text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      [ EXPLORAR CONCEPTO ]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* SECTION 4: 📜 ANÁLISIS LITERARIO          */}
          {/* ========================================== */}
          {activeSection === 'analisis' && book.analysis && (
            <div className="space-y-6">
              {/* Header with Title and Copy button */}
              <div className="border-b-2 border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
                    <h3 className="font-pixel text-xs sm:text-base text-amber-300">
                      FICHA TÉCNICA Y ANÁLISIS LITERARIO
                    </h3>
                  </div>
                  <span className="font-silkscreen text-[11px] text-slate-400 block mt-1">
                    Elementos estructurales, corriente estética y claves formales para la exposición escolar
                  </span>
                </div>

                <button
                  onClick={handleCopyAnalysis}
                  className="pixel-btn-action self-start sm:self-auto px-3 py-1.5 bg-slate-950 hover:bg-slate-900 border-2 border-amber-400/80 text-xs font-pixel text-amber-300 flex items-center gap-2 cursor-pointer shadow-md"
                  title="Copiar resumen estructurado para tus apuntes o diapositivas"
                >
                  {copiedAnalysis ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">¡FICHA COPIADA!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>COPIAR FICHA</span>
                    </>
                  )}
                </button>
              </div>

              {/* 4 Quick Stat RPG-Style Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-950 border-2 border-amber-500/60 shadow-md">
                  <div className="flex items-center gap-1.5 text-amber-400 font-pixel text-[10px] mb-1">
                    <Feather className="w-3.5 h-3.5" />
                    <span>COMPOSICIÓN</span>
                  </div>
                  <div className="font-silkscreen text-xs text-slate-100 truncate">
                    {book.analysis.compositionType.split('(')[0].trim()}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 border-2 border-cyan-500/60 shadow-md">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-pixel text-[10px] mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>CORRIENTE</span>
                  </div>
                  <div className="font-silkscreen text-xs text-slate-100 truncate">
                    {book.analysis.literaryMovement.split('(')[0].trim()}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 border-2 border-emerald-500/60 shadow-md">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-pixel text-[10px] mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>AÑO DE PUBLICACIÓN</span>
                  </div>
                  <div className="font-silkscreen text-xs text-slate-100 truncate">
                    {book.analysis.publicationYear.toString().split('(')[0].trim()}
                  </div>
                </div>

                <div className="p-3 bg-slate-950 border-2 border-purple-500/60 shadow-md">
                  <div className="flex items-center gap-1.5 text-purple-400 font-pixel text-[10px] mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>GÉNERO / ESPECIE</span>
                  </div>
                  <div className="font-silkscreen text-xs text-slate-100 truncate">
                    {book.analysis.literaryGenre?.split('·')[1]?.trim() || book.genre}
                  </div>
                </div>
              </div>

              {/* Main Analysis Items List (Detailed RPG Codex) */}
              <div className="bg-slate-950 border-3 border-slate-800 p-4 sm:p-6 space-y-5">
                {/* 1. Nombre de la obra & 2. Nombre del autor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-800">
                  <div className="p-3.5 bg-slate-900/90 border border-slate-700">
                    <span className="font-silkscreen text-[10px] text-amber-400 tracking-wider block mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      1. NOMBRE DE LA OBRA
                    </span>
                    <h4 className="font-pixel text-sm sm:text-base text-amber-200">
                      {book.analysis.workTitle}
                    </h4>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 border border-slate-700">
                    <span className="font-silkscreen text-[10px] text-emerald-400 tracking-wider block mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      2. NOMBRE DEL AUTOR
                    </span>
                    <h4 className="font-pixel text-sm sm:text-base text-emerald-200">
                      {book.analysis.author}
                    </h4>
                  </div>
                </div>

                {/* 3. Año de publicación & 4. Tipo de composición */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-800">
                  <div className="p-3.5 bg-slate-900/90 border border-slate-700">
                    <span className="font-silkscreen text-[10px] text-cyan-400 tracking-wider block mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      3. AÑO DE PUBLICACIÓN
                    </span>
                    <p className="font-readable text-xs sm:text-sm text-slate-200">
                      {book.analysis.publicationYear}
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 border border-slate-700">
                    <span className="font-silkscreen text-[10px] text-amber-400 tracking-wider block mb-1 flex items-center gap-1.5">
                      <Feather className="w-3.5 h-3.5 text-amber-400" />
                      4. TIPO DE COMPOSICIÓN (PROSA / VERSO)
                    </span>
                    <p className="font-readable text-xs sm:text-sm text-slate-200">
                      {book.analysis.compositionType}
                    </p>
                  </div>
                </div>

                {/* 5. Corriente literaria a la que pertenece */}
                <div className="p-3.5 bg-slate-900/90 border border-slate-700 pb-4 border-b border-slate-800">
                  <span className="font-silkscreen text-[10px] text-purple-400 tracking-wider block mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-purple-400" />
                    5. CORRIENTE LITERARIA A LA QUE PERTENECE
                  </span>
                  <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {book.analysis.literaryMovement}
                  </p>
                </div>

                {/* 6. Estructura de la obra */}
                <div className="p-3.5 bg-slate-900/90 border border-slate-700 pb-4 border-b border-slate-800">
                  <span className="font-silkscreen text-[10px] text-emerald-400 tracking-wider block mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    6. ESTRUCTURA (ORGANIZACIÓN POR CAPÍTULOS / PARTES)
                  </span>
                  <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {book.analysis.structure}
                  </p>
                </div>

                {/* 7. Característica 1: Tipo de narrador y punto de vista */}
                <div className="p-3.5 bg-slate-900/90 border border-slate-700 pb-4 border-b border-slate-800">
                  <span className="font-silkscreen text-[10px] text-yellow-400 tracking-wider block mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-yellow-400" />
                    7. TIPO DE NARRADOR Y PUNTO DE VISTA
                  </span>
                  <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {book.analysis.narratorType}
                  </p>
                </div>

                {/* 8. Característica 2: Tono y atmósfera predominante */}
                <div className="p-3.5 bg-slate-900/90 border border-slate-700 pb-4 border-b border-slate-800">
                  <span className="font-silkscreen text-[10px] text-rose-400 tracking-wider block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                    8. TONO Y ATMÓSFERA PREDOMINANTE
                  </span>
                  <p className="font-readable text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {book.analysis.predominantTone}
                  </p>
                </div>

                {/* Características complementarias: Género y Recursos estilísticos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {book.analysis.literaryGenre && (
                    <div className="p-3.5 bg-slate-900/90 border border-slate-700">
                      <span className="font-silkscreen text-[10px] text-blue-400 tracking-wider block mb-1">
                        GÉNERO Y ESPECIE LITERARIA
                      </span>
                      <p className="font-readable text-xs text-slate-300">
                        {book.analysis.literaryGenre}
                      </p>
                    </div>
                  )}

                  {book.analysis.stylisticNotes && (
                    <div className="p-3.5 bg-slate-900/90 border border-slate-700">
                      <span className="font-silkscreen text-[10px] text-amber-400 tracking-wider block mb-1">
                        RECURSOS Y LENGUAJE ESTILÍSTICO
                      </span>
                      <p className="font-readable text-xs text-slate-300">
                        {book.analysis.stylisticNotes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Diorama Connection Note */}
                <div className="p-4 bg-amber-950/20 border-l-4 border-amber-400 font-readable text-xs text-amber-200/90 flex items-start gap-3 mt-4">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-silkscreen text-[11px] text-amber-300 block mb-1">
                      DEFENSA DE LA MAQUETA ESCOLAR ({book.dioramaStation.toUpperCase()}):
                    </strong>
                    <p className="leading-relaxed">
                      Esta ficha de análisis sustenta teóricamente la maqueta física exhibida. Al exponer ante el jurado o los visitantes, vincula la corriente literaria y el tono narrativo con los materiales, luces y figuras tridimensionales construidas en la estación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer Navigation helper */}
      <footer className="bg-slate-950 border-t border-slate-900 px-4 sm:px-6 py-3 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-silkscreen text-[11px] text-slate-400">
          <button
            onClick={() => {
              sound.playBack();
              onBackToMap();
            }}
            className="hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← VOLVER AL MAPA GENERAL</span>
          </button>

          <span className="text-slate-500">
            The Lecture World · Estación de Exposición Escolar
          </span>
        </div>
      </footer>

      {/* Modals */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}

      {selectedTheme && (
        <ThemeModal
          theme={selectedTheme}
          bookTitle={book.title}
          onClose={() => setSelectedTheme(null)}
        />
      )}

      {showQRModal && (
        <DioramaQRModal
          book={book}
          onClose={() => setShowQRModal(false)}
        />
      )}
    </div>
  );
};
