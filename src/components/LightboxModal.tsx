import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: { id: number; url: string; alt: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
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
      aria-label="Visualizador de atividade"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 transition-opacity"
      onClick={onClose}
    >
      {/* Barra superior de controle */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-none">
        <span className="text-xs font-medium tracking-wide bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-auto">
          Exemplo {currentIndex + 1} de {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualizador"
          className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Botão anterior */}
      <button
        type="button"
        aria-label="Atividade anterior"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all backdrop-blur-sm z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Imagem em tamanho maior */}
      <div
        className="relative max-w-3xl max-h-[85vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 sm:p-3 border border-white/20">
          <img
            src={currentItem.url}
            alt={currentItem.alt}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl select-none"
          />
        </div>
        <p className="mt-3 text-xs sm:text-sm text-white/80 font-medium">
          Exemplos reais do material.
        </p>
      </div>

      {/* Botão próximo */}
      <button
        type="button"
        aria-label="Próxima atividade"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % images.length);
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all backdrop-blur-sm z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
