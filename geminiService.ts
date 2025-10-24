import { GoogleGenAI, Type } from "@google/genai";
import { servicesList } from '../data/servicesData';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you would have a more robust way of handling this.
  // For this context, we will throw an error if the key is missing.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const zartecServiceTitles = servicesList.map(s => s.title);

export interface AiSuggestion {
  suggestion: string;
  services: string[];
}

export const generateSolutionSuggestion = async (problemDescription: string): Promise<AiSuggestion> => {
  if (!API_KEY) {
    return Promise.resolve({
      suggestion: "AI Suggester is currently unavailable. Please select from the services below or contact us directly for assistance.",
      services: []
    });
  }
    
  const model = 'gemini-2.5-flash';
  
  const systemInstruction = `You are an expert solutions consultant for Zartec Trading, a technology services company. Your goal is to analyze a potential client's business problem and recommend one or more of Zartec's services.
Here is the list of available services:
- ${zartecServiceTitles.join('\n- ')}

Based on the user's problem description, you must return a JSON object with two keys:
1. "suggestion": A brief, friendly, and helpful text recommendation for the client (under 100 words).
2. "services": An array of strings containing the exact titles of the recommended services from the list provided. Only include the most relevant services. If no services are a good fit, return an empty array.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: problemDescription,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: {
              type: Type.STRING,
              description: 'A friendly, helpful recommendation for the client based on their problem description.'
            },
            services: {
              type: Type.ARRAY,
              description: 'An array of service titles that are being recommended. Must be an exact match from the list of available services.',
              items: {
                type: Type.STRING,
              }
            }
          }
        }
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result as AiSuggestion;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get suggestion from Gemini API.");
  }
};