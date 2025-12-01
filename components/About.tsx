
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { PROFILE } from '../config';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26] leading-tight">
            {PROFILE.about.mainHeading}
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#44403C] font-light leading-relaxed mb-8">
            Soy <strong>{PROFILE.university.degree}</strong> egresada de la <strong>{PROFILE.university.name}</strong>. {PROFILE.about.intro}
          </p>
          <p className="text-lg md:text-xl text-[#44403C] font-light leading-relaxed mb-8">
            Mi formación se especializa en la clínica de adultos a través del <strong>{PROFILE.postgraduate.title} ({PROFILE.postgraduate.institution})</strong> y se actualiza constantemente, destacando mi <strong>Diplomatura Universitaria en Familia y Pareja (AASM)</strong>. Integro además herramientas de <strong>Mindfulness</strong> para el abordaje del estrés y la regulación emocional.
          </p>
          <div className="mt-12 p-8 bg-[#F5F2EB] border border-[#D6D1C7]">
            <h4 className="font-serif text-xl mb-4 text-[#2C2A26]">Formación y Credenciales</h4>
            <ul className="space-y-2 text-[#5D5A53] font-light text-sm">
                <li>• {PROFILE.university.degree} (UBA)</li>
                <li>• {PROFILE.postgraduate.title}</li>
                {PROFILE.courses.map((course, index) => (
                    <li key={index}>• {course}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200" 
             alt="Libros y estudio" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[0.3]"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Enfoque Clínico</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
             {PROFILE.about.philosophyTitle}
           </h3>
           <p className="text-lg text-[#44403C] font-light leading-relaxed mb-12 max-w-md">
             {PROFILE.about.philosophyText}
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">El Espacio</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
             {PROFILE.about.spaceTitle}
           </h3>
           <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
             {PROFILE.about.spaceText}
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
             alt="Sesión de terapia" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90 grayscale-[0.5]"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
