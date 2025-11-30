
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { PROFILE } from '../config';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#F5F2EB]">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000" 
            alt="Consultorio cálido con sillón confortable" 
            className="w-full h-full object-cover object-center"
        />
      </div>

      {/* The "Magic" Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#F5F2EB] via-[#F5F2EB]/95 to-transparent md:via-45%"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 max-w-[1800px] mx-auto">
        <div className="animate-fade-in-up w-full md:w-1/2 lg:w-2/5 mt-20 md:mt-0">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6 border-l-2 border-[#2C2A26] pl-4">
            {PROFILE.title}
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#2C2A26] tracking-tight mb-8 leading-[1.1]">
            {PROFILE.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-10 max-w-md">
            {PROFILE.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              onClick={(e) => handleNavClick(e, 'products')}
              className="px-8 py-4 bg-[#2C2A26] text-[#F5F2EB] text-sm font-medium uppercase tracking-widest hover:bg-[#433E38] transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {PROFILE.hero.buttonPrimary}
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-8 py-4 bg-transparent border border-[#2C2A26] text-[#2C2A26] text-sm font-medium uppercase tracking-widest hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-all duration-300 text-center"
            >
              {PROFILE.hero.buttonSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#2C2A26]/40 hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
