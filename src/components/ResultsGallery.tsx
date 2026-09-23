import React from 'react';
import { ZoomIn, Eye, Sparkles } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface ResultsGalleryProps {
  onOpenImage: (index: number) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onOpenImage }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D5C52] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C69A58]" />
            <span>Casos e Provas Reais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#15221F] leading-tight">
            Resultados reais de quem voltou a sorrir com confiança
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4C5954] leading-relaxed">
            Cada sorriso carrega uma história única de recuperação da autoestima e função mastigatória. Toque nas imagens para ver em detalhes.
          </p>
        </div>

        {/* Grid de Imagens dos Resultados */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EXPERT_DATA.resultsImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenImage(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E6E0D5] shadow-sm hover:shadow-md hover:border-[#0D5C52]/40 transition-all flex flex-col"
            >
              {/* Image Container with overlay & zoom icon */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1E2623]">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle scrim & tap hint */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-2.5 backdrop-blur-sm shadow-md flex items-center gap-1.5 text-xs font-medium">
                    <ZoomIn className="w-4 h-4 text-[#E6C98A]" />
                    <span className="hidden sm:inline">Ampliar</span>
                  </div>
                </div>

                {/* Tag pill in corner */}
                <div className="absolute top-3 left-3 bg-[#15221F]/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {item.tag}
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#15221F] group-hover:text-[#0D5C52] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5C6A64] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between text-[11px] text-[#0D5C52] font-semibold">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#C69A58]" />
                    Toque para ver em tela cheia
                  </span>
                  <span className="text-[#88948E]">Caso #{item.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discreet mandatory legal/medical notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#6F7D77] italic">
            * Resultados podem variar de pessoa para pessoa. Fotos de casos clínicos reais com autorização expressa dos pacientes conforme as normas éticas do CFO/CRO.
          </p>
        </div>

      </div>
    </section>
  );
};
