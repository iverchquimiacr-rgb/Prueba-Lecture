/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { BOOKS_DATA, getBookBySlug } from './data/booksData';
import { WelcomeScreen } from './components/WelcomeScreen';
import { WorldMap } from './components/WorldMap';
import { BookDetailView } from './components/BookDetailView';
import { PortalTransition } from './components/PortalTransition';
import { sound, MusicTheme } from './utils/sound';
import { BookOpen, ArrowLeft } from 'lucide-react';

type ScreenState = 'welcome' | 'map' | 'book';

// Helper to determine the ambient theme corresponding to a book
function getBookTheme(slug: string): MusicTheme {
  switch (slug) {
    case 'crimen-y-castigo':
      return 'crime';
    case 'eruditus':
      return 'eruditus';
    case 'ensayo-sobre-la-ceguera':
      return 'blindness';
    case 'tres-dias-para-mateo':
      return 'mateo';
    case 'mitos-griegos':
      return 'myths';
    default:
      return 'general';
  }
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('welcome');
  const [activeBookSlug, setActiveBookSlug] = useState<string | null>(null);
  const [portalTargetSlug, setPortalTargetSlug] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(sound.enabled);
  const [bgmEnabled, setBgmEnabled] = useState<boolean>(sound.bgmEnabled);

  // Update background ambient music based on current screen & active book
  const updateBgmForContext = useCallback((screen: ScreenState, slug?: string | null) => {
    if (screen === 'book' && slug) {
      sound.playAmbientTrack(getBookTheme(slug));
    } else {
      sound.playAmbientTrack('general');
    }
  }, []);

  // Parse path on initial mount and respond to popstate events
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;

      if (path.startsWith('/obra/')) {
        const slug = path.replace('/obra/', '').split('/')[0];
        const found = getBookBySlug(slug);
        if (found) {
          setActiveBookSlug(found.slug);
          setCurrentScreen('book');
          updateBgmForContext('book', found.slug);
          return;
        }
      }

      if (path === '/map' || path === '/mapa') {
        setCurrentScreen('map');
        setActiveBookSlug(null);
        updateBgmForContext('map');
        return;
      }

      // Root path default
      if (path === '/' || path === '') {
        setCurrentScreen('welcome');
        setActiveBookSlug(null);
        updateBgmForContext('welcome');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [updateBgmForContext]);

  // Handle entering a book with a portal transition
  const handleSelectBookWithPortal = (slug: string) => {
    setPortalTargetSlug(slug);
  };

  const handlePortalComplete = () => {
    if (portalTargetSlug) {
      setActiveBookSlug(portalTargetSlug);
      setCurrentScreen('book');
      window.history.pushState(null, '', `/obra/${portalTargetSlug}`);
      updateBgmForContext('book', portalTargetSlug);
      setPortalTargetSlug(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateTo = (screen: ScreenState) => {
    setCurrentScreen(screen);
    if (screen === 'map') {
      setActiveBookSlug(null);
      window.history.pushState(null, '', '/map');
      updateBgmForContext('map');
    } else if (screen === 'welcome') {
      setActiveBookSlug(null);
      window.history.pushState(null, '', '/');
      updateBgmForContext('welcome');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const nextState = sound.toggleSound();
    setSoundEnabled(nextState);
  };

  const handleToggleBgm = () => {
    const nextState = sound.toggleBgm();
    setBgmEnabled(nextState);
  };

  const [audioBannerDismissed, setAudioBannerDismissed] = useState(false);

  const activeBook = activeBookSlug ? getBookBySlug(activeBookSlug) : null;
  const portalTargetBook = portalTargetSlug ? getBookBySlug(portalTargetSlug) : null;

  const handleDismissAudioBanner = () => {
    sound.unlockAudio();
    sound.testAudioChime();
    setAudioBannerDismissed(true);
  };

  return (
    <div 
      className="min-h-screen bg-slate-950 font-readable antialiased select-none text-slate-100"
      onClick={() => {
        if (!sound.isAudioUnlocked) {
          sound.unlockAudio();
        }
      }}
    >
      {/* Prominent Audio Unlock Banner for Browser Autoplay Compliance */}
      {!audioBannerDismissed && bgmEnabled && (
        <div 
          onClick={handleDismissAudioBanner}
          className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500 text-slate-950 px-4 py-2 flex items-center justify-between shadow-lg cursor-pointer hover:brightness-105 transition-all"
        >
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
            <div className="flex items-center gap-2 font-pixel text-[10px] sm:text-xs">
              <span className="w-2.5 h-2.5 bg-slate-950 animate-ping rounded-full" />
              <span>🎵 HAZ CLIC AQUÍ PARA INICIAR LA MÚSICA Y EFECTOS 8-BIT</span>
            </div>
            <button className="px-2 py-0.5 bg-slate-950 text-amber-300 font-pixel text-[9px] border border-amber-300 cursor-pointer">
              ACTIVAR SONIDO ▶
            </button>
          </div>
        </div>
      )}

      {/* Screen Render Switch */}
      {currentScreen === 'welcome' && (
        <WelcomeScreen
          onEnterWorld={() => navigateTo('map')}
          onSelectBook={handleSelectBookWithPortal}
          soundEnabled={soundEnabled}
          bgmEnabled={bgmEnabled}
          onToggleSound={handleToggleSound}
          onToggleBgm={handleToggleBgm}
        />
      )}

      {currentScreen === 'map' && (
        <WorldMap
          books={BOOKS_DATA}
          onSelectBook={handleSelectBookWithPortal}
          onBackToTitle={() => navigateTo('welcome')}
          soundEnabled={soundEnabled}
          bgmEnabled={bgmEnabled}
          onToggleSound={handleToggleSound}
          onToggleBgm={handleToggleBgm}
        />
      )}

      {currentScreen === 'book' && activeBook && (
        <BookDetailView
          book={activeBook}
          onBackToMap={() => navigateTo('map')}
          soundEnabled={soundEnabled}
          bgmEnabled={bgmEnabled}
          onToggleSound={handleToggleSound}
          onToggleBgm={handleToggleBgm}
        />
      )}

      {currentScreen === 'book' && !activeBook && (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-950">
          <div className="w-16 h-16 bg-rose-950 border-2 border-rose-500 flex items-center justify-center text-rose-400 mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="font-pixel text-base sm:text-xl text-rose-400 mb-2">
            OBRA NO ENCONTRADA EN EL MUNDO
          </h2>
          <p className="font-readable text-sm text-slate-300 max-w-md mb-6">
            La URL escaneada no coincide con ninguna maqueta registrada en The Lecture World.
          </p>
          <button
            onClick={() => navigateTo('map')}
            className="pixel-btn-action px-6 py-3 bg-amber-400 text-slate-950 font-pixel text-xs flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>IR AL MAPA PRINCIPAL</span>
          </button>
        </div>
      )}

      {/* PORTAL TRANSITION OVERLAY */}
      {portalTargetSlug && portalTargetBook && (
        <PortalTransition
          targetBookTitle={portalTargetBook.title}
          targetBookAuthor={portalTargetBook.author}
          dioramaStation={portalTargetBook.dioramaStation}
          onComplete={handlePortalComplete}
        />
      )}
    </div>
  );
}
