import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { Benefits } from './components/Benefits';
import { OfferSection } from './components/OfferSection';
import { TargetAudience } from './components/TargetAudience';
import { MidCta } from './components/MidCta';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { LightboxModal } from './components/LightboxModal';
import { PRODUCT_DATA } from './data/productData';

export default function App() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleOpenImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handleNavigateLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#2D3748] flex flex-col font-sans">
      
      {/* 1. HERO — PRIMEIRA DOBRA */}
      <Hero onOpenImage={handleOpenImage} />

      {/* 2. APRESENTAÇÃO DO PRODUTO */}
      <Presentation onOpenImage={handleOpenImage} />

      {/* 3. BENEFÍCIOS */}
      <Benefits />

      {/* 4. OFERTA */}
      <OfferSection />

      {/* 5. PARA QUEM É */}
      <TargetAudience />

      {/* 6. CTA INTERMEDIÁRIO */}
      <MidCta />

      {/* 7. FAQ */}
      <FaqSection />

      {/* 8. CTA FINAL */}
      <FinalCta onOpenImage={handleOpenImage} />

      {/* 9. RODAPÉ */}
      <Footer />

      {/* CTA FIXO NO MOBILE */}
      <StickyMobileCta />

      {/* LIGHTBOX FUNCIONAL */}
      <LightboxModal
        images={PRODUCT_DATA.images}
        currentIndex={activeImageIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

    </div>
  );
}
