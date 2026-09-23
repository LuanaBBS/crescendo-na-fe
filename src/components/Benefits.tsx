import React from 'react';
import { Heart, Users, Sparkles, Compass } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const Benefits: React.FC = () => {
  // Ícones minimalistas para os 4 cards
  const icons = [
    <Compass className="w-5 h-5 text-[#2B6CB0]" key="icon-1" />,
    <Users className="w-5 h-5 text-[#D97706]" key="icon-2" />,
    <Sparkles className="w-5 h-5 text-[#2F855A]" key="icon-3" />,
    <Heart className="w-5 h-5 text-[#C53030]" key="icon-4" />,
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#EFE8DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1A202C] leading-tight">
            Mais do que atividades: momentos com propósito
          </h2>
        </div>

        {/* 4 Cards de Benefícios */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCT_DATA.benefits.map((card, idx) => (
            <div
              key={card.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FCFBF7] border border-[#EAE3D5] shadow-2xs hover:shadow-xs transition-shadow duration-200 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E2D9C8] flex items-center justify-center shadow-3xs mb-4">
                  {icons[idx]}
                </div>

                <h3 className="text-lg font-bold font-heading text-[#1A202C] leading-snug">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
