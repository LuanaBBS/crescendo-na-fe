import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_DATA } from '../data/productData';

interface HeroProps {
  onOpenImage?: (index: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenImage }) => {
  return (
    <header className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F7F3E9] border-b border-[#EFE8DA]">
      {/* Elementos decorativos suaves no fundo */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#FEEBC8]/30 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-[#E8F2FA]/50 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Identificação no topo */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9DFCF] shadow-xs text-xs sm:text-sm font-semibold tracking-wider text-[#4A5568] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>CRESCENDO NA FÉ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Textos + Oferta + CTA Principal */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Etiqueta visual: MATERIAL DIGITAL */}
            <div className="inline-block px-3 py-1 mb-4 rounded-md bg-[#E8F2FA] text-[#2B6CB0] font-bold text-xs tracking-wider uppercase border border-[#CBDDEE]">
              MATERIAL DIGITAL
            </div>

            {/* Headline principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#1A202C] leading-[1.18] tracking-tight">
              Transforme momentos com as crianças em momentos de aprendizado e fé.
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Atividades cristãs infantis para tornar o aprendizado sobre a fé mais leve, criativo e divertido.
            </p>

            {/* Bloco de Oferta em Destaque */}
            <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#E6DDCE] shadow-sm max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div className="text-xs sm:text-sm font-semibold text-[#718096] uppercase tracking-wider">
                DE <span className="line-through text-[#A0AEC0]">{PRODUCT_DATA.previousPrice}</span>
              </div>
              <div className="text-xs font-semibold text-[#D97706] uppercase tracking-wider mt-1">
                POR APENAS
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-heading text-[#2F855A] leading-none mt-1 tracking-tight">
                {PRODUCT_DATA.currentPrice}
              </div>

              {/* Botão Principal */}
              <div className="mt-5">
                <a
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center w-full px-7 py-4 rounded-xl bg-[#2F855A] hover:bg-[#276749] text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>QUERO O CRESCENDO NA FÉ</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
                
                {/* Microcopy abaixo do botão */}
                <p className="mt-2.5 text-xs text-[#718096] text-center font-medium">
                  Comece agora pelo checkout.
                </p>
              </div>
            </div>

          </div>

          {/* Lado Direito: Composição Visual com Imagens Reais do Produto */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Composição elegante de 2 atividades reais sobrepostas suavemente */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* Imagem Real 1 */}
                <div 
                  onClick={() => onOpenImage && onOpenImage(0)}
                  className="w-48 sm:w-56 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white transform sm:-rotate-2 hover:rotate-0 transition-transform duration-200 cursor-pointer"
                  title="Toque para ampliar"
                >
                  <img
                    src={PRODUCT_DATA.images[0].url}
                    alt={PRODUCT_DATA.images[0].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover select-none"
                    loading="eager"
                  />
                  <div className="py-2 px-3 bg-white text-center border-t border-slate-100">
                    <span className="text-[11px] font-medium text-slate-500">Exemplo real do material</span>
                  </div>
                </div>

                {/* Imagem Real 2 */}
                <div 
                  onClick={() => onOpenImage && onOpenImage(1)}
                  className="w-48 sm:w-56 -mt-8 sm:mt-8 sm:-ml-12 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white transform sm:rotate-3 hover:rotate-0 transition-transform duration-200 cursor-pointer z-10"
                  title="Toque para ampliar"
                >
                  <img
                    src={PRODUCT_DATA.images[1].url}
                    alt={PRODUCT_DATA.images[1].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover select-none"
                    loading="eager"
                  />
                  <div className="py-2 px-3 bg-white text-center border-t border-slate-100">
                    <span className="text-[11px] font-medium text-slate-500">Exemplo real do material</span>
                  </div>
                </div>

              </div>

              {/* Tag discreta de confirmação */}
              <div className="mt-4 text-center">
                <span className="text-xs text-[#718096] bg-white/80 px-3 py-1 rounded-full border border-[#E2E8F0]">
                  Toque na imagem para visualizar
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
