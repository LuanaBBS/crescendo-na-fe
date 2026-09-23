import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxProps {
  images: { url: string; title?: string; description?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const currentItem = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de resultado em tela cheia"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-none"
      >
        <span className="text-xs font-medium tracking-wide bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-auto">
          {currentIndex + 1} de {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualizador"
          className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Left */}
      <button
        type="button"
        aria-label="Imagem anterior"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-4xl max-h-[82vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
          <img
            src={currentItem.url}
            alt={currentItem.title || "Resultado clínico Dra. Isabela Damasceno"}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {(currentItem.title || currentItem.description) && (
          <div className="mt-4 text-center max-w-xl px-4">
            {currentItem.title && (
              <h4 className="text-white font-semibold text-base sm:text-lg">
                {currentItem.title}
              </h4>
            )}
            {currentItem.description && (
              <p className="text-white/70 text-xs sm:text-sm mt-1">
                {currentItem.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Navigation Right */}
      <button
        type="button"
        aria-label="Próxima imagem"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % images.length);
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
