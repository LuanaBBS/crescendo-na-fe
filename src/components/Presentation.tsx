import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_DATA } from '../data/productData';

interface PresentationProps {
  onOpenImage?: (index: number) => void;
}

export const Presentation: React.FC<PresentationProps> = ({ onOpenImage }) => {
  // Mostraremos 3 imagens reais nesta seção
  const displayImages = [
    { image: PRODUCT_DATA.images[2], index: 2 },
    { image: PRODUCT_DATA.images[3], index: 3 },
    { image: PRODUCT_DATA.images[4], index: 4 },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#EFE8DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Ícone sutil de temática */}
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#FEF9E7] text-[#D97706] mb-4 border border-[#FDE68A]">
          <BookOpen className="w-5 h-5" />
        </div>

        {/* Título oficial */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1A202C] leading-tight max-w-2xl mx-auto">
          Um material para aprender, brincar e crescer na fé
        </h2>

        {/* Texto curto oficial */}
        <p className="mt-4 text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
          O Crescendo na Fé foi pensado para trazer atividades com temática cristã para momentos de aprendizado, criatividade e interação com as crianças.
        </p>

        {/* 2 ou 3 Imagens Reais do Material */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {displayImages.map(({ image, index }) => (
            <div
              key={image.id}
              onClick={() => onOpenImage && onOpenImage(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FCFBF7] border border-[#E9DFCF] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
              title="Clique para ampliar"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-50 flex items-center justify-center p-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-200 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
              <div className="py-2.5 px-3 border-t border-[#EFE8DA] bg-white text-center">
                <span className="text-xs text-[#718096] font-medium">Exemplos reais do material.</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Compra */}
        <div className="mt-10">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2F855A] hover:bg-[#276749] text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-200 gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span>QUERO CONHECER O MATERIAL</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
