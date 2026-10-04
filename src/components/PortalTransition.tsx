import React, { useEffect, useState } from 'react';
import { sound } from '../utils/sound';
import { Sparkles, Compass } from 'lucide-react';

interface PortalTransitionProps {
  targetBookTitle: string;
  targetBookAuthor?: string;
  dioramaStation?: string;
  onComplete: () => void;
}

export const PortalTransition: React.FC<PortalTransitionProps> = ({ 
  targetBookTitle, 
  targetBookAuthor,
  dioramaStation,
  onComplete 
}) => {
  const [warpProgress, setWarpProgress] = useState(0);

  useEffect(() => {
    sound.playPortalWarp();

    const interval = setInterval(() => {
      setWarpProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 12;
      });
    }, 90);

    const timer = setTimeout(() => {
      onComplete();
    }, 1150);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden select-none">
      {/* Hyper-speed Warp Starfield / Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#38bdf820_0%,#0f172a80_50%,#020617_100%)]" />

      {/* Warp Speed Lines radiating outwards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[180vw] h-[180vh] border-[40px] border-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '0.8s' }} />
        <div className="absolute w-[130vw] h-[130vh] border-[30px] border-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '0.6s' }} />
        <div className="absolute w-[80vw] h-[80vh] border-[20px] border-amber-500/40 rounded-full animate-ping" style={{ animationDuration: '0.4s' }} />
      </div>

      {/* Outer Dimensional Runes & Energy Vortex */}
      <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center">
        {/* Ring 1: Golden Gear */}
        <div 
          className="absolute inset-0 rounded-full border-4 border-amber-400 border-dashed animate-spin shadow-[0_0_30px_rgba(245,158,11,0.5)]" 
          style={{ animationDuration: '3.5s' }} 
        />

        {/* Ring 2: Cyan Concentric Ring */}
        <div 
          className="absolute inset-6 rounded-full border-4 border-cyan-400/80 border-dotted animate-spin shadow-[0_0_25px_rgba(6,182,212,0.6)]" 
          style={{ animationDuration: '2s', animationDirection: 'reverse' }} 
        />

        {/* Ring 3: Purple Arc Plasma */}
        <div 
          className="absolute inset-12 rounded-full border-8 border-purple-500/80 animate-pulse shadow-[0_0_40px_rgba(168,85,247,0.7)]" 
        />

        {/* Ring 4: Swirling Core Glow */}
        <div 
          className="absolute inset-20 rounded-full bg-gradient-to-tr from-amber-500/30 via-emerald-500/40 to-cyan-500/30 animate-spin blur-xs"
          style={{ animationDuration: '1.2s' }}
        />

        {/* Center Portal HUD Card */}
        <div className="relative z-10 text-center p-6 bg-slate-950/95 border-3 border-amber-400 shadow-2xl max-w-xs sm:max-w-sm mx-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400 text-slate-950 font-pixel text-[9px] mb-3">
            <Sparkles className="w-3 h-3" />
            <span>PORTAL DIMENSIONAL ACTIVADO</span>
          </div>

          <h2 className="font-pixel text-sm sm:text-base text-amber-300 pixel-text-shadow mb-1 leading-snug">
            {targetBookTitle}
          </h2>

          {targetBookAuthor && (
            <div className="font-silkscreen text-xs text-slate-300 mb-2">
              {targetBookAuthor}
            </div>
          )}

          {dioramaStation && (
            <div className="font-silkscreen text-[10px] text-emerald-400 border-t border-slate-800 pt-2 mb-3">
              {dioramaStation}
            </div>
          )}

          {/* Progress Bar of the Warp Jump */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[8px] font-pixel text-slate-400">
              <span>SALTO DIMENSIONAL</span>
              <span className="text-amber-400">{warpProgress}%</span>
            </div>
            <div className="w-full h-3 bg-slate-900 border border-slate-700 p-0.5 flex">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 transition-all duration-100" 
                style={{ width: `${warpProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scanline Texture Overlay */}
      <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
    </div>
  );
};
