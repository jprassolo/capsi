
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';
import { PROFILE } from './config';

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Terapia Individual (Adultos)',
    tagline: 'Espacio de escucha analítica.',
    description: 'Sesiones orientadas al autoconocimiento y la resolución de conflictos internos mediante el enfoque psicoanalítico.',
    longDescription: 'Un espacio seguro y confidencial diseñado para explorar el inconsciente, comprender patrones de conducta repetitivos y aliviar el malestar psíquico. Trabajamos sobre la ansiedad, la angustia y los desafíos de la vida cotidiana, permitiendo que surja la propia palabra del sujeto.',
    price: PROFILE.prices.individual,
    category: 'Adultos',
    // Nueva imagen: Persona mirando al horizonte/paisaje, postura pensativa
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-2761e201783d?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1499209974431-2761e201783d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Presencial o Virtual', 'Frecuencia Semanal', '50 minutos']
  },
  {
    id: 's2',
    name: 'Terapia de Pareja',
    tagline: 'Reconstruyendo el vínculo.',
    description: 'Abordaje de conflictos relacionales, comunicación y crisis de pareja en un entorno neutral.',
    longDescription: 'Las sesiones de pareja ofrecen un marco para escuchar lo que no se dice en la convivencia diaria. Trabajamos sobre los malentendidos, las crisis vitales y la posibilidad de construir nuevos acuerdos vinculares, o bien, acompañar procesos de separación saludables.',
    price: PROFILE.prices.couple,
    category: 'Parejas',
    // Imagen movida desde Terapia Individual (Retrato introspectivo)
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1629259856528-76a38676c483?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Mediación de conflictos', 'Comunicación asertiva', '60 minutos']
  },
  {
    id: 's3',
    name: 'Atención a Adolescentes',
    tagline: 'Acompañamiento en el crecimiento.',
    description: 'Espacio especializado para transitar los desafíos de la adolescencia, identidad y vínculos.',
    longDescription: 'La adolescencia es un momento de reestructuración psíquica fundamental. Ofrezco un lugar de escucha para abordar temáticas como el bullying, la identidad, la orientación vocacional y las relaciones con los pares y la familia, respetando la singularidad de cada joven.',
    price: PROFILE.prices.adolescents,
    category: 'Adolescentes',
    imageUrl: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Orientación Vocacional', 'Abordaje de Bullying', 'Privacidad garantizada']
  },
  {
    id: 's4',
    name: 'Mindfulness y Regulación',
    tagline: 'Atención plena en el presente.',
    description: 'Sesiones enfocadas en la reducción del estrés y la ansiedad mediante técnicas de conciencia plena.',
    longDescription: `Como ${PROFILE.mindfulness.title} (${PROFILE.mindfulness.institution}), integro estas herramientas en la clínica para ayudar a pacientes con altos niveles de estrés o ansiedad. Aprendemos a habitar el presente sin juzgar, reduciendo la rumiación mental.`,
    price: PROFILE.prices.mindfulness,
    category: 'Talleres',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Técnicas de respiración', 'Manejo de ansiedad', 'Presencial u Online']
  },
  {
    id: 's5',
    name: 'Consultoría en Adicciones',
    tagline: 'Recuperando el control.',
    description: 'Abordaje clínico especializado en consumos problemáticos y adicciones comportamentales.',
    longDescription: 'Un tratamiento orientado a comprender la función del síntoma adictivo en la vida del sujeto. Trabajo interdisciplinario si es necesario, brindando contención y estrategias para la recuperación y la reinserción en un proyecto de vida saludable.',
    price: PROFILE.prices.addiction,
    category: 'Adultos',
    imageUrl: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1518182170546-0766ce6fec56?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Especialización clínica', 'Apoyo familiar', 'Confidencialidad']
  },
  {
    id: 's6',
    name: 'Terapia Online',
    tagline: 'Sin barreras geográficas.',
    description: 'La misma profundidad analítica, desde la comodidad y seguridad de tu hogar.',
    longDescription: 'La modalidad remota permite sostener el tratamiento independientemente de la distancia física. Ideal para expatriados, personas con movilidad reducida o agendas complejas. Se realiza a través de plataformas seguras de videollamada.',
    price: PROFILE.prices.online,
    category: 'Online',
    imageUrl: 'https://images.unsplash.com/photo-1534067783741-512d0deaf5ec?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1534067783741-512d0deaf5ec?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1616587894289-86480e533129?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Plataforma Segura', 'Horarios Flexibles', 'Español']
  }
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
