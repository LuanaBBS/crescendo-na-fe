import React from 'react';
import { User, GraduationCap, BookOpen, Smile } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const TargetAudience: React.FC = () => {
  const audienceIcons = [
    <User className="w-5 h-5 text-[#2B6CB0]" key="parents" />,
    <GraduationCap className="w-5 h-5 text-[#D97706]" key="teachers" />,
    <BookOpen className="w-5 h-5 text-[#2F855A]" key="educators" />,
    <Smile className="w-5 h-5 text-[#C53030]" key="helpers" />,
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#EFE8DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1A202C] leading-tight">
          Para quem é o Crescendo na Fé?
        </h2>

        {/* Texto de apoio oficial */}
        <p className="mt-3 text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
          {PRODUCT_DATA.audienceSupportText}
        </p>

        {/* Quatro Blocos */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {PRODUCT_DATA.audience.map((item, index) => (
            <div
              key={item}
              className="p-6 rounded-2xl bg-[#FCFBF7] border border-[#E9DFCF] shadow-3xs flex flex-col items-center text-center transition-all duration-200 hover:shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E0D7C6] flex items-center justify-center shadow-3xs mb-3">
                {audienceIcons[index]}
              </div>
              <h3 className="text-base font-bold font-heading text-[#1A202C]">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
