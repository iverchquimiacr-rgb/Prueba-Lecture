import React, { useState } from 'react';
import { Book } from '../types/book';
import { sound } from '../utils/sound';
import { QrCode, Copy, Check, ExternalLink, MapPin, X } from 'lucide-react';

interface DioramaQRModalProps {
  book: Book;
  onClose: () => void;
}

export const DioramaQRModal: React.FC<DioramaQRModalProps> = ({ book, onClose }) => {
  const [copied, setCopied] = useState(false);
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${currentOrigin}/obra/${book.slug}`;

  const handleCopy = () => {
    sound.playBlip(600, 0.05);
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generates clean SVG QR code visual for this specific URL
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(fullUrl)}&color=0f172a&bgcolor=f8fafc&margin=2`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-slate-900 border-4 border-amber-500 shadow-[0_0_30px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 border-b-2 border-amber-500 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="w-4 h-4 text-amber-400" />
            <span className="font-pixel text-[11px] text-amber-300">
              CÓDIGO QR · MAQUETA FÍSICA
            </span>
          </div>

          <button
            onClick={() => {
              sound.playBack();
              onClose();
            }}
            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-4">
          <div>
            <h3 className="font-pixel text-sm text-amber-300 mb-1">
              {book.title}
            </h3>
            <p className="font-silkscreen text-[11px] text-emerald-400 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{book.dioramaStation}</span>
            </p>
          </div>

          {/* QR Display Card with pixel frame */}
          <div className="p-3 bg-white border-4 border-slate-950 inline-block shadow-inner">
            <img 
              src={qrSvgUrl} 
              alt={`QR para ${book.title}`} 
              className="w-48 h-48 pixelated mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="font-readable text-xs text-slate-300">
            Escanea este código con cualquier cámara móvil junto a la maqueta para abrir directamente esta obra sin pasar por el mapa.
          </p>

          {/* URL Box & Copy */}
          <div className="flex items-center gap-2 bg-slate-950 p-2 border border-slate-800">
            <input 
              readOnly 
              value={fullUrl} 
              className="bg-transparent text-xs font-mono text-slate-300 truncate flex-1 outline-none px-2"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-pixel text-[9px] flex items-center gap-1 cursor-pointer shrink-0"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIADO' : 'COPIAR'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
