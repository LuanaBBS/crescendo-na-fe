import React from 'react';
import { MessageSquare, CalendarCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { EXPERT_DATA, buildWhatsAppLink } from '../data/expertData';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#0D5C52]" key="msg" />,
    <CalendarCheck className="w-5 h-5 text-[#C69A58]" key="cal" />,
    <Stethoscope className="w-5 h-5 text-[#0D5C52]" key="scope" />
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C52]">
            Simples, Rápido e Sem Burocracia
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#15221F] leading-tight">
            Como funciona a sua primeira consulta gratuita
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4C5954]">
            Em apenas 3 etapas você agenda seu horário para cuidar do seu sorriso com tranquilidade:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {EXPERT_DATA.steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD4] shadow-sm flex flex-col justify-between text-left"
            >
              <div>
                {/* Step badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-bold font-display text-[#C69A58]">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#15221F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#54625C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F3EFE8] text-[11px] font-semibold text-[#0D5C52]">
                Etapa 0{index + 1} de 03
              </div>
            </div>
          ))}

        </div>

        {/* Action reminder */}
        <div className="mt-10 text-center">
          <a
            href={buildWhatsAppLink("Quero iniciar a Etapa 1")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0D5C52] hover:text-[#0A453E] group"
          >
            <span>Iniciar o Passo 1 agora pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C69A58]" />
          </a>
        </div>

      </div>
    </section>
  );
};
