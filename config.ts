
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
  license: "M.N. (Consultar)", // Matrícula no visible en CV, placeholder genérico
  shortDescription: "Psicología Clínica UBA. Especialista en Adultos, Parejas y Familias.",
  
  // --- CONTACTO ---
  email: "noe.valdevenitez@gmail.com",
  location: "Capital Federal, Buenos Aires, Argentina",

  // --- FORMACIÓN ACADÉMICA ---
  university: {
    degree: "Licenciada en Psicología",
    name: "Universidad de Buenos Aires (2010)"
  },
  postgraduate: {
    title: "Posgrado en Formación Clínica",
    institution: "Institución Fernando Ulloa"
  },
  mindfulness: {
    title: "Instructora de Mindfulness",
    institution: "Axon Training / UBA"
  },
  // Credenciales extraídas del CV
  courses: [
    "Diplomatura Univ. en Familia y Pareja (AASM - 2022)",
    "Psico-Oncología (Hosp. Álvarez / Centro Médico Austral)",
    "Acompañamiento Terapéutico (Hospital Borda)",
    "Género y Psicoanálisis (Inst. Fernando Ulloa)",
    "Abordaje de la problemática del suicidio (Min. Salud)"
  ],

  // --- LISTA DE PRECIOS (EN ARS) ---
  // Los valores en 0 se mostrarán como "Consultar" o "A coordinar"
  prices: {
    initialInterview: 25000,
    individual: 0,
    couple: 0,
    mindfulness: 0 
  },

  // --- TEXTOS DE LA WEB ---
  hero: {
    title: "Hacer lugar a la palabra.",
    subtitle: "Un espacio seguro para alojar la singularidad. Atención a adolescentes, adultos y parejas en modalidad presencial y online.",
    buttonPrimary: "Solicitar Entrevista",
    buttonSecondary: "Conocer mi recorrido"
  },
  about: {
    mainHeading: "Trayectoria clínica, formación continua y compromiso ético.",
    // Biografía construida con datos del CV (UBA, Hospitales, Gestión)
    intro: "Graduada de la Universidad de Buenos Aires en 2010. Cuento con más de una década de experiencia en atención clínica privada e institucional. Mi recorrido incluye el paso por el Hospital Borda y el Hospital Álvarez en áreas de Psico-oncología, así como roles de coordinación y gestión en organismos nacionales.",
    philosophyTitle: "Un enfoque integral.",
    philosophyText: "Mi práctica integra la rigurosidad del psicoanálisis (formación Ulloa) con una mirada actual sobre las nuevas configuraciones vinculares (Diplomatura en Familia y Pareja). Entiendo la salud mental no solo como la ausencia de síntomas, sino como la capacidad de construir una vida con sentido propio.",
    spaceTitle: "El espacio terapéutico.",
    spaceText: "Ofrezco un marco de escucha libre de juicios, garantizando absoluta confidencialidad. Ya sea en modalidades presenciales o virtuales, el objetivo es alojar la singularidad de cada paciente y trabajar sobre aquello que obstaculiza su bienestar."
  }
};
