import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_DATA } from '../data/productData';

export const OfferSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF6ED] via-[#F5EFE0] to-[#FAF6ED] border-b border-[#EFE8DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Central em Destaque */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DAC6] shadow-md text-center max-w-2xl mx-auto relative overflow-hidden">
          
          {/* Fundo suave */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -z-10 w-48 h-48 bg-[#FEF9E7] rounded-full blur-2xl pointer-events-none"
          />

          {/* Pequena etiqueta: OFERTA ESPECIAL */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold text-xs tracking-wider uppercase border border-[#FDE68A] mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>OFERTA ESPECIAL</span>
          </div>

          {/* Nome do Produto */}
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#1A202C]">
            {PRODUCT_DATA.name}
          </h2>

          {/* Frase curta */}
          <p className="mt-2 text-sm sm:text-base text-[#4A5568]">
            Leve o material digital e comece agora.
          </p>

          {/* Preços */}
          <div className="mt-6 pt-6 border-t border-[#F2ECE3]">
            <div className="text-sm font-semibold text-[#718096] uppercase tracking-wider">
              De <span className="line-through text-[#A0AEC0]">{PRODUCT_DATA.previousPrice}</span>
            </div>

            <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mt-1">
              Por apenas
            </div>

            {/* O preço R$ 9,90 deve ser o maior elemento da seção */}
            <div className="text-5xl sm:text-6xl font-extrabold font-heading text-[#2F855A] leading-none mt-2 tracking-tight">
              {PRODUCT_DATA.currentPrice}
            </div>
          </div>

          {/* Botão Grande com transição sutil de 200ms e hover suave */}
          <div className="mt-8">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4.5 rounded-xl bg-[#2F855A] hover:bg-[#276749] text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
            >
              <span>QUERO O MEU CRESCENDO NA FÉ</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
          </div>

          {/* Selo/Box discreto de Garantia de 7 dias */}
          <div className="mt-7 pt-5 border-t border-[#F2ECE3] flex items-center justify-center gap-3 text-left max-w-md mx-auto p-3.5 rounded-2xl bg-[#FCFBF7] border border-[#EBE3D5]">
            <div className="w-10 h-10 rounded-xl bg-[#EBF5EC] border border-[#C6F6D5] flex items-center justify-center text-[#2F855A] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1A202C] leading-snug">
                Compra segura com 7 dias de garantia
              </h4>
              <p className="text-[11px] sm:text-xs text-[#526058] leading-relaxed mt-0.5">
                Você tem até 7 dias após a compra para solicitar a devolução, conforme as condições da oferta.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
