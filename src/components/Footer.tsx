import React from 'react';
import { PRODUCT_DATA } from '../data/productData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 pb-24 sm:pb-12 bg-[#FAF6ED] text-[#4A5568] border-t border-[#EFE8DA] text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1A202C]">
          {PRODUCT_DATA.name}
        </h3>
        <p className="mt-1 text-sm text-[#718096]">
          {PRODUCT_DATA.category}
        </p>
      </div>
    </footer>
  );
};
