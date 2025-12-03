
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal;

  // --- ESTADO PARA MANEJAR EL FORMULARIO ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timePreference: '',
    consultationReason: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- FUNCIÓN PARA ENVIAR EL FORMULARIO ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Aquí se envían los datos a Formspree
    try {
      const response = await fetch('https://formspree.io/f/mvoedrwb', { // <-- REEMPLAZA ESTO con tu URL de Formspree
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          servicios_solicitados: items.map(item => item.name).join(', '),
          total_estimado: total,
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', timePreference: '', consultationReason: '' });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus('error');
    }
  };


  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[#2C2A26] mb-4">Solicitud de Turno</h1>
            <p className="text-sm text-[#5D5A53] mb-12">Complete sus datos para coordinar la agenda. Nos pondremos en contacto a la brevedad.</p>
            
            {formStatus === 'success' ? (
                <div className="bg-[#EBE7DE] p-8 text-center min-h-[400px] flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-serif text-[#2C2A26] mb-4">¡Gracias por tu mensaje!</h2>
                    <p className="text-[#5D5A53]">He recibido tu solicitud y me pondré en contacto contigo a la brevedad para coordinar los detalles.</p>
                </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Section 1: Contact */}
                <div>
                  <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Datos de Contacto</h2>
                  <div className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nombre completo" required className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Correo electrónico" required className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Teléfono / WhatsApp" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                  </div>
                </div>

                {/* Section 2: Preferences */}
                <div>
                  <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Preferencias</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <select name="timePreference" value={formData.timePreference} onChange={handleInputChange} className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26] transition-colors">
                          <option value="">Preferencia Horaria</option>
                          <option value="morning">Mañana (9:00 - 12:00)</option>
                          <option value="afternoon">Tarde (13:00 - 18:00)</option>
                          <option value="evening">Noche (18:00 - 20:00)</option>
                        </select>
                    </div>
                    <textarea name="consultationReason" value={formData.consultationReason} onChange={handleInputChange} placeholder="Motivo de consulta (breve, opcional)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors h-24 resize-none"></textarea>
                  </div>
                </div>

                <div>
                  <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors disabled:opacity-50 disabled:cursor-wait"
                  >
                      {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
                  </button>
                  {formStatus === 'error' && <p className="text-red-700 text-xs mt-4 text-center">Hubo un error al enviar el formulario. Por favor, intenta de nuevo.</p>}
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#2C2A26] mb-8">Resumen de Servicios</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EBE7DE] relative">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[#2C2A26] text-base">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#5D5A53]">
                        {item.price > 0 ? `$${item.price}` : 'A coordinar'}
                    </span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>Honorarios Totales</span>
                 <span>${subtotal}</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6D1C7] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#2C2A26]">Total Estimado</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">ARS</span>
                   <span className="font-serif text-2xl text-[#2C2A26]">${total}</span>
                 </div>
               </div>
               <p className="text-xs text-[#A8A29E] mt-4">Los honorarios pueden estar sujetos a reintegro por obra social según corresponda. Servicios sin precio fijo se acuerdan en la entrevista.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
