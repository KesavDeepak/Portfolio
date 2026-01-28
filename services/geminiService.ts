
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Alex Rivars' AI Portfolio Assistant. 
Alex is a senior full-stack engineer specializing in React, TypeScript, Node.js, and System Design.
He has 7 core skills: React, TypeScript, Node.js, PostgreSQL, Docker, AWS, and System Design.
He works with the "Emerald-400" and "Slate-900" aesthetic.
Be professional, concise, and helpful. If asked about his projects, mention EcoPulse, Vortex Engine, and CipherLink.
Only talk about Alex's professional background.
`;

export const getAIResponse = async (history: ChatMessage[], userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently taking a coffee break. Please try again in a moment!";
  }
};
