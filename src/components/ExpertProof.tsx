import React from 'react';
import { Camera, Sparkles, MapPin, Heart } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface ExpertProofProps {
  onOpenPhoto?: (url: string, title: string) => void;
}

export const ExpertProof: React.FC<ExpertProofProps> = () => {
  const proofItems = [
    {
      url: "https://i.imgur.com/6RUy3gI.png",
      tag: "Acolhimento & Segurança",
      title: "Atendimento 100% personalizado",
      description: "Escuta atenta das suas necessidades para construir um plano de tratamento sob medida, sem pressa."
    },
    {
      url: "https://i.imgur.com/vbTMCog.png",
      tag: "Rigor Técnico",
      title: "Planejamento e tecnologia avançada",
      description: "Precisão cirúrgica para implantes duradouros e laserterapia para uma cicatrização confortável."
    },
    {
      url: "https://i.imgur.com/x5dm47a.png",
      tag: "Resultados Humanizados",
      title: "Sorrisos que renovam a autoestima",
      description: "O maior propósito é devolver a liberdade de sorrir em fotos de família e mastigar sem qualquer receio."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[#ECE6DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D5C52] mb-2">
            <Camera className="w-3.5 h-3.5 text-[#C69A58]" />
            <span>Presença & Bastidores</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#15221F] leading-tight">
            Mais provas do cuidado que você receberá
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4C5954]">
            Conheça o ambiente de dedicação e o foco exclusivo em devolver sua segurança ao sorrir.
          </p>
        </div>

        {/* 3-Column Visual Showcase */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8] shadow-xs flex flex-col group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1E2522]">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#15221F] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[11px] uppercase tracking-wider text-[#E6C98A] font-medium flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#E6C98A]" />
                    Dra. Isabela Damasceno
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 text-left">
                <p className="text-xs sm:text-sm text-[#54625C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Salvador trust bar */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#3E4A45]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0D5C52]" />
            <span className="font-semibold text-[#15221F]">Consultório em Salvador, Bahia</span>
            <span>· Local de fácil acesso e estacionamento</span>
          </div>
          <div className="text-xs text-[#0D5C52] font-semibold">
            Atendimento com hora marcada
          </div>
        </div>

      </div>
    </section>
  );
};
