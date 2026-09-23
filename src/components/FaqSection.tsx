import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const FaqSection: React.FC = () => {
  // Estado para controlar qual item do accordion está aberto
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#EFE8DA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#E8F2FA] text-[#2B6CB0] mb-3">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1A202C]">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {PRODUCT_DATA.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E8E0D2] bg-white overflow-hidden transition-all duration-200 shadow-3xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-[#1A202C] hover:text-[#2F855A] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading">{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E9E1D4] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E8F2FA] border-[#CBDDEE]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#4A5568]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#4A5568] leading-relaxed border-t border-[#F5EFE6]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
