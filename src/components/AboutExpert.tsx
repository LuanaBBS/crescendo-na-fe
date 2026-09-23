import React from 'react';
import { Sparkles, Shield, Heart, Award, ArrowRight } from 'lucide-react';
import { EXPERT_DATA, buildWhatsAppLink } from '../data/expertData';

export const AboutExpert: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[#ECE6DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo with personal framing */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F3EFE8] bg-[#1B2723]">
                <img
                  src="https://i.imgur.com/vbTMCog.png"
                  alt="Dra. Isabela Damasceno em atendimento"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center aspect-[4/5]"
                  loading="lazy"
                />
                
                {/* Micro caption directly on photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white text-left">
                  <p className="text-xs font-semibold text-[#E6C98A]">Dra. Isabela Damasceno</p>
                  <p className="text-[11px] text-white/80">Salvador, BA · Atendimento Exclusivo</p>
                </div>
              </div>

              {/* Decorative accent element */}
              <div 
                aria-hidden="true" 
                className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-3xl bg-[#C69A58]/20" 
              />
            </div>
          </div>

          {/* Personal 1st-person Story & Differentials */}
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0D5C52] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A58]" />
              <span>Quem sou eu</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#15221F] leading-tight">
              Muito prazer, sou a <span className="text-[#0D5C52]">Isabela Damasceno</span>.
            </h2>

            {/* Short human text in 1st person */}
            <div className="mt-4 space-y-3 text-sm sm:text-base text-[#3E4A45] leading-relaxed">
              <p>
                Eu acredito que o consultório odontológico não deve ser um lugar de tensão ou constrangimento. Sei que muitas pessoas passam anos escondendo a boca ao sorrir ou deixando de mastigar o que gostam por medo da dor, traumas antigos ou vergonha de procurar ajuda.
              </p>
              <p>
                Aqui em Salvador, meu trabalho é justamente acolher você com respeito e sem qualquer julgamento. Eu acompanho pessoalmente cada etapa do seu tratamento — do diagnóstico cuidadoso ao pós-operatório —, aplicando técnicas modernas de <strong>implantes seguros</strong>, <strong>próteses estéticas e confortáveis</strong> e <strong>laserterapia para alívio de dor e rápida cicatrização</strong>.
              </p>
            </div>

            {/* Bullet points com diferenciais em 1ª pessoa */}
            <div className="mt-6 space-y-3 pt-5 border-t border-[#ECE6DC]">
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#0D5C52]/10 text-[#0D5C52] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#15221F]">Implantes com fixação segura e estável</h3>
                  <p className="text-xs text-[#5C6863]">Devolvem a força mastigatória para você comer o que quiser sem medo de se soltar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#C69A58]/15 text-[#C69A58] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#15221F]">Próteses sob medida com visual natural</h3>
                  <p className="text-xs text-[#5C6863]">Desenhadas para harmonizar perfeitamente com seu formato de rosto, lábios e tom de pele.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#0D5C52]/10 text-[#0D5C52] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#15221F]">Laserterapia para regeneração e sem dor</h3>
                  <p className="text-xs text-[#5C6863]">Uso de tecnologia a laser para reduzir inchaço, cessar desconfortos e acelerar a cicatrização.</p>
                </div>
              </div>

            </div>

            {/* Micro button to schedule directly with her */}
            <div className="mt-7">
              <a
                href={buildWhatsAppLink("Conversar sobre meu caso")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D5C52] hover:text-[#0A453E] group"
              >
                <span>Converse diretamente comigo no WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C69A58]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
