import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../data/productData';

export const MidCta: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#2F855A] text-white relative overflow-hidden text-center">
      {/* Detalhes suaves no fundo */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-[#FEF3C7]" />
          <span>Crescendo na Fé</span>
        </div>

        {/* Headline oficial */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-tight text-white">
          Pequenos momentos podem criar grandes memórias.
        </h2>

        {/* Texto oficial */}
        <p className="mt-3 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
          Tenha o Crescendo na Fé e leve mais criatividade e propósito para os momentos com as crianças.
        </p>

        {/* Botão */}
        <div className="mt-8">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-[#F7FAFC] text-[#22543D] font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span>QUERO POR R$ 9,90</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
