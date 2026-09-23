import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_DATA } from '../data/productData';

interface FinalCtaProps {
  onOpenImage?: (index: number) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenImage }) => {
  const secondaryImage = PRODUCT_DATA.images[5]; // imagem real 6

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#FCFBF7] to-[#F5EFE3] border-b border-[#EFE8DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Textos + Preço + Botão Chamativo */}
          <div className="lg:col-span-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EC] text-[#2F855A] font-bold text-xs tracking-wider uppercase border border-[#C6F6D5] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2F855A]" />
              <span>OPORTUNIDADE</span>
            </div>

            {/* Headline oficial */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1A202C] leading-tight">
              Comece agora a criar momentos de aprendizado e fé.
            </h2>

            {/* Texto oficial */}
            <p className="mt-3 text-base sm:text-lg text-[#4A5568]">
              O Crescendo na Fé está disponível por R$ 9,90.
            </p>

            {/* Bloco de Preço */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
              <span className="text-sm font-semibold text-[#718096] uppercase">
                DE <span className="line-through text-[#A0AEC0]">{PRODUCT_DATA.previousPrice}</span>
              </span>
              <span className="hidden sm:inline text-slate-300">·</span>
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#2F855A]">
                POR {PRODUCT_DATA.currentPrice}
              </span>
            </div>

            {/* Botão mais chamativo da seção */}
            <div className="mt-8">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#2F855A] hover:bg-[#276749] text-white font-extrabold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-200 gap-3 cursor-pointer active:scale-[0.99]"
              >
                <span>QUERO O CRESCENDO NA FÉ</span>
                <ArrowRight className="w-6 h-6 shrink-0" />
              </a>
            </div>

          </div>

          {/* Imagem real como elemento visual secundário */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenImage && onOpenImage(5)}
              className="w-52 sm:w-60 rounded-2xl overflow-hidden bg-white border border-[#E2D9C8] shadow-md p-2.5 cursor-pointer hover:scale-102 transition-transform duration-200"
              title="Clique para ampliar"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                <img
                  src={secondaryImage.url}
                  alt={secondaryImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-lg select-none"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-medium text-[#718096]">
                  Exemplo real do material.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
