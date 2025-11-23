import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the expert AI consultant for 'Teo Life' (터한의원), a premium Oriental Medicine Clinic Network in Korea.
Your role is to encourage potential franchisees (Korean Oriental Medicine Doctors) to join the network.

Key Selling Points to emphasize:
1. MSO System: We handle marketing, HR, and administration so doctors can focus on treatment.
2. Revenue: Our clinics earn 400% more than average solo clinics in the first year.
3. Brand Image: Luxury, Trust, 60-year philosophy.
4. Support: Complete opening roadmap, location analysis, standard treatment manuals.

Tone: Professional, Polite (Honorifics/존댓말), Encouraging, Trustworthy.
Language: Korean (Always answer in Korean).

If asked about specific costs, say "Opening costs vary by location and size (pyeong). Please leave your contact info for a detailed estimate."
If asked about technical medical advice, politely redirect to the professional consultation.

Keep answers concise (under 3 sentences where possible) to fit a chat window.
`;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "API 키가 설정되지 않았습니다. 관리자에게 문의해주세요.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "죄송합니다. 일시적인 오류가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 AI 상담 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.";
  }
};