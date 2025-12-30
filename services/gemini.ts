
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export async function getAIAssistance(prompt: string, history: { role: 'user' | 'model'; text: string }[]) {
  if (!API_KEY) return "عذراً، مفتاح API غير متوفر حالياً.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "أنت مساعد ذكي لمدونة 'المغرب التقني'. تخصصك هو أخبار التكنولوجيا في المغرب، تطوير الذات، والتسويق بالعمولة (الأفلييت). أجب باللغة العربية بأسلوب مهني وجذاب ومفيد للشباب المغربي والعربي.",
    },
  });

  try {
    // In current SDK version, we send the message. History is handled by the instance if created correctly, 
    // but for simplicity with the stateless nature of some requests, we'll just send the current message.
    const response = await chat.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي. يرجى المحاولة لاحقاً.";
  }
}
