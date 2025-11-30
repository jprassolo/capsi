
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';
import { PROFILE } from '../config';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Detalles: ${p.features.join(', ')}`
  ).join('\n');

  return `Eres el Asistente Virtual de "${PROFILE.name}", ${PROFILE.title}.
  Tu tono es empático, profesional, calmado y respetuoso. 
  La profesional es egresada de ${PROFILE.university.name}, con posgrado en ${PROFILE.postgraduate.institution} y certificada en Mindfulness (${PROFILE.mindfulness.institution}).
  
  Matrícula: ${PROFILE.license}.
  Ubicación: ${PROFILE.location}.
  
  Aquí están los servicios actuales y sus precios:
  ${productContext}
  
  Responde preguntas sobre los tipos de terapia, horarios (generalmente de lunes a viernes), y enfoque.
  Si alguien menciona una crisis aguda o emergencia, sugiere contactar a servicios de emergencia locales inmediatamente (ej: 911 o 107 en Argentina), no intentes hacer terapia tú mismo.
  Mantén las respuestas concisas y amables.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, checking if process exists first to avoid ReferenceError in browsers
    try {
      if (typeof process !== 'undefined' && process.env) {
        apiKey = process.env.API_KEY;
      }
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Lo siento, no puedo conectar con el servidor en este momento. (Falta API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Disculpa, estoy teniendo problemas para conectar en este momento. Por favor intenta más tarde.";
  }
};
