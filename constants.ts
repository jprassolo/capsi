
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';
import { PROFILE } from './config';

export const PRODUCTS: Product[] = [
  {
    id: 's0',
    name: 'Entrevista Inicial',
    tagline: 'Primer paso hacia el cambio.',
    description: 'Espacio de evaluación diagnóstica y coordinación del tratamiento. Fundamental para iniciar cualquier proceso.',
    longDescription: 'La entrevista inicial es el primer encuentro donde evaluamos el motivo de consulta, la modalidad de trabajo más adecuada y establecemos el encuadre terapéutico. Es el momento para despejar dudas y conocer al profesional.',
    price: PROFILE.prices.initialInterview,
    category: 'Entrevista',
    imageUrl: 'https://images.unsplash.com/photo-1554325139-bbd006cd3e5a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1554325139-bbd006cd3e5a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606166187734-a433e10e5979?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Evaluación diagnóstica', 'Definición de objetivos', '45-50 minutos']
  },
  {
    id: 's1',
    name: 'Terapia Individual (Adultos)',
    tagline: 'Espacio de escucha analítica.',
    description: 'Sesiones orientadas al autoconocimiento y la resolución de conflictos internos mediante el enfoque psicoanalítico.',
    longDescription: 'Un espacio seguro y confidencial diseñado para explorar el inconsciente, comprender patrones de conducta repetitivos y aliviar el malestar psíquico. Trabajamos sobre la ansiedad, la angustia y los desafíos de la vida cotidiana, permitiendo que surja la propia palabra del sujeto.',
    price: PROFILE.prices.individual,
    category: 'Adultos',
    // Nueva imagen: Espacio de terapia cálido (Sillones, luz natural) - Más estable que retratos
    imageUrl: 'https://images.unsplash.com/photo-1581333100576-b73befd79a9b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1581333100576-b73befd79a9b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560963689-02e820147bc3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Presencial', 'Frecuencia Semanal', '50 minutos']
  },
  {
    id: 's2',
    name: 'Terapia de Pareja',
    tagline: 'Reconstruyendo el vínculo.',
    description: 'Abordaje de conflictos relacionales, comunicación y crisis de pareja en un entorno neutral.',
    longDescription: 'Las sesiones de pareja ofrecen un marco para escuchar lo que no se dice en la convivencia diaria. Trabajamos sobre los malentendidos, las crisis vitales y la posibilidad de construir nuevos acuerdos vinculares, o bien, acompañar procesos de separación saludables.',
    price: PROFILE.prices.couple,
    category: 'Parejas',
    imageUrl: 'https://images.unsplash.com/photo-1675223542616-48d425978e38?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1675223542616-48d425978e38?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1629259856528-76a38676c483?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Mediación de conflictos', 'Comunicación asertiva', '60 minutos']
  },
  {
    id: 's4',
    name: 'Mindfulness y Regulación Emocional (Individual)',
    tagline: 'Atención plena en el presente.',
    description: 'Sesiones enfocadas en la reducción del estrés y la ansiedad mediante técnicas de conciencia plena.',
    longDescription: `Como ${PROFILE.mindfulness.title} (${PROFILE.mindfulness.institution}), integro estas herramientas en la clínica para ayudar a pacientes con altos niveles de estrés o ansiedad. Aprendemos a habitar el presente sin juzgar, reduciendo la rumiación mental.`,
    price: PROFILE.prices.mindfulness,
    category: 'Talleres',
    imageUrl: 'https://images.unsplash.com/photo-1444312645910-ffa973656eba?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1444312645910-ffa973656eba?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Técnicas de respiración', 'Manejo de ansiedad', 'Presencial']
  }//,
//  {
//    id: 's5',
//    name: 'Mindfulness y Regulación Emocional (Grupal)',
//    tagline: 'Conexión y aprendizaje compartido.',
//    description: 'Talleres grupales reducidos para el aprendizaje de técnicas de meditación y gestión emocional en un entorno de contención.',
//    longDescription: `Espacio de taller grupal diseñado para aprender y practicar técnicas de Mindfulness junto a otros. El trabajo en grupo potencia el bienestar, reduce la sensación de soledad y favorece el intercambio de experiencias enriquecedoras en un marco cuidado y profesional.`,
//    price: PROFILE.prices.mindfulnessGroup,
//    category: 'Talleres',
//    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000',
//    gallery: [
//        'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000',
//        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000'
//    ],
//    features: ['Grupos reducidos', 'Práctica compartida', 'Frecuencia a coordinar']
//  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "¿Qué es el Psicoanálisis hoy?",
        date: "Abril 12, 2025",
        excerpt: "La vigencia de la escucha analítica en tiempos de inmediatez digital.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "Vivimos en la era de la inmediatez. Buscamos respuestas rápidas en Google para dolores que son del alma. Sin embargo, el psicoanálisis propone algo revolucionario: detenerse."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "No se trata de aplicar una receta universal, sino de habilitar un espacio donde la palabra circule. En mi práctica clínica, veo cómo el sufrimiento contemporáneo (ansiedad, insomnio, ataques de pánico) a menudo responde a palabras no dichas."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"El inconsciente está estructurado como un lenguaje. Escucharlo es el primer paso para sanar.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "El dispositivo analítico, ya sea presencial o remoto, ofrece esa pausa necesaria para re-escribir nuestra propia historia."
            )
        )
    },
    {
        id: 2,
        title: "Mindfulness y Ansiedad",
        date: "Marzo 28, 2025",
        excerpt: "Integrando la atención plena como herramienta complementaria a la terapia.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Muchas veces nuestra mente viaja al futuro (generando ansiedad) o se ancla en el pasado (generando melancolía). El Mindfulness nos invita a volver al 'aquí y ahora'."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                `Como ${PROFILE.mindfulness.title} (${PROFILE.mindfulness.institution}), he comprobado que la práctica sostenida de la atención plena ayuda a regular el sistema nervioso, creando un terreno fértil para el trabajo analítico profundo.`
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "Respirar es volver a casa."),
                React.createElement("p", null, "Observar sin juzgar."),
                React.createElement("p", null, "Habitar el momento."),
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "No se trata de dejar la mente en blanco, sino de cambiar nuestra relación con nuestros pensamientos."
            )
        )
    },
    {
        id: 3,
        title: "Adolescencia y Límites",
        date: "Marzo 15, 2025",
        excerpt: "El desafío de acompañar el crecimiento en tiempos de hiperconexión.",
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "La adolescencia es un despertar, pero también un duelo por la infancia perdida. En mi consultorio, trabajo frecuentemente con problemáticas de bullying y adicciones tecnológicas."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "El límite no es un castigo, es una estructura de cuidado. Los adolescentes piden a gritos contención, aunque su discurso manifiesto diga lo contrario."
            )
        )
    }
];

export const BRAND_NAME = PROFILE.name;
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';
