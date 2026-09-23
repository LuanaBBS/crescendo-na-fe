import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  HeartHandshake, 
  Zap, 
  BadgePercent 
} from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const WhyTrustMe: React.FC = () => {
  const icons = [
    <ShieldCheck className="w-5 h-5 text-[#0D5C52]" key="shield" />,
    <UserCheck className="w-5 h-5 text-[#C69A58]" key="user" />,
    <Zap className="w-5 h-5 text-[#0D5C52]" key="zap" />,
    <Sparkles className="w-5 h-5 text-[#C69A58]" key="sparkles" />,
    <HeartHandshake className="w-5 h-5 text-[#0D5C52]" key="heart" />,
    <BadgePercent className="w-5 h-5 text-[#C69A58]" key="percent" />
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#ECE6DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C52]">
            Transparência e Respeito
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#15221F] leading-tight">
            Por que confiar em mim para cuidar do seu sorriso?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4C5954]">
            Eu sei o quanto a saúde da sua boca é algo pessoal e íntimo. Por isso, fundamentei minha conduta profissional em 6 pilares inegociáveis:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EXPERT_DATA.differentials.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#0D5C52]/40 transition-all hover:shadow-sm text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0D8CB] flex items-center justify-center shadow-xs mb-4">
                  {icons[index % icons.length]}
                </div>

                <h3 className="text-base font-bold text-[#15221F] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#4E5B55] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#ECE6DC] flex items-center justify-between text-[11px] font-medium text-[#7C8983]">
                <span>Pilar 0{index + 1}</span>
                <span className="text-[#0D5C52] font-semibold">Garantia de Atenção</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
