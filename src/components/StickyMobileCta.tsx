import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_DATA } from '../data/productData';

export const StickyMobileCta: React.FC = () => {
  return (
    <aside
      aria-label="Barra de compra rápida"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DFCF] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] sm:hidden"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider">
            Material Digital
          </span>
          <span className="text-xs font-semibold text-[#1A202C]">
            {PRODUCT_DATA.name}
          </span>
        </div>

        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2F855A] hover:bg-[#276749] text-white font-bold text-xs shadow-sm transition-all duration-200 active:scale-95 shrink-0"
        >
          <span>QUERO POR R$ 9,90</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
