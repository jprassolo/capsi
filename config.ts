/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ==========================================
// ARCHIVO DE CONFIGURACIÓN DEL PROFESIONAL
// Edita aquí la información, precios y textos.
// ==========================================

export const PROFILE = {
  // --- DATOS PERSONALES ---
  name: "Lic. Noelia Rocio Valdevenitez",
  title: "Psicóloga Clínica",
  license: "M.N. 45678", // Matrícula
  shortDescription: "Psicología Clínica y Psicoanálisis.",
  
  // --- CONTACTO ---
  email: "lic.valdevenitez@gmail.com",
  location: "Flores (CABA), Buenos Aires, Argentina",

  // --- FORMACIÓN ACADÉMICA ---
  university: {
    degree: "Licenciada en Psicología",
    name: "Universidad de Buenos Aires (UBA)"
  },
  postgraduate: {
    title: "Posgrado en Psicología Analítica",
    institution: "Centro de Estudios ULLOA"
  },
  mindfulness: {
    title: "Profesional Certificada en Mindfulness",
    institution: "Centro ESTUDIO"
  },
  courses: ["Especialización en Adicciones", "Abordaje del Bullying", "Crisis Vitales"],

  // --- LISTA DE PRECIOS (EN ARS) ---
  prices: {
    individual: 35000,
    couple: 45000,
    adolescents: 35000,
    addiction: 38000,
    online: 35000,
    mindfulness: 30000
  },

  // --- TEXTOS DE LA WEB ---
  hero: {
    title: "Hacer lugar a la palabra.",
    subtitle: "Un espacio seguro para alojar la singularidad. Atención a adolescentes, adultos y parejas en modalidad presencial y online.",
    buttonPrimary: "Agendar Consulta",
    buttonSecondary: "Conocer más"
  },
  about: {
    mainHeading: "Escuchar para comprender, comprender para sanar.",
    intro: "Entiendo la terapia no solo como la cura de un síntoma, sino como un viaje hacia la verdad subjetiva de cada persona.",
    philosophyTitle: "Psicoanálisis y Actualidad.",
    philosophyText: "Trabajo desde una perspectiva psicoanalítica clásica pero atenta a los malestares de la época. La ansiedad, la inmediatez y la fragilidad de los vínculos requieren una escucha que aloje la singularidad sin prejuicios.",
    spaceTitle: "Confidencialidad y Ética.",
    spaceText: "El consultorio es un lugar sagrado. Garantizo absoluta reserva y un marco ético riguroso para que puedas hablar de aquello que quizás nunca has dicho en voz alta."
  }
};