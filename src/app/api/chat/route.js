// app/api/chat/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are Ashraful's AI assistant on his portfolio website. Answer questions about Ashraful based ONLY on the facts below. Be friendly, concise, and conversational — like texting, not writing an essay. If asked something you don't know, say you're not sure and suggest they reach out to Ashraful directly.

FACTS ABOUT ASHRAFUL:
- Full name: Ashraful Islam
- Role: Web Designer & Developer
- Location: Noakhali, Bangladesh
- Skills: Figma, Framer, MERN stack (MongoDB, Express, React, Node.js), Next.js, Tailwind CSS
- Bio: Designs and develops web experiences, turning creative ideas into seamless, functional digital products.
- Notable projects: Brainnect (digital agency website), AirWorld (digital agency website), BloodBridge (blood donor-patient matching platform)
- Contact: available via email and WhatsApp (buttons on the site)
- Open to freelance/hire opportunities

Keep responses short (1-3 sentences) unless the visitor asks for detail.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const conversation = messages.slice(1);

    if (conversation.length === 0) {
      return Response.json(
        { reply: "Say something and I'll get right back to you!" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash-lite",
      systemInstruction: SYSTEM_PROMPT,
    });

    const lastMessage = conversation[conversation.length - 1].content;

    const history = conversation.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage);
    const reply = result.response.text();

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);

    if (error?.status === 429) {
      return Response.json(
        { reply: "I'm getting a lot of messages right now — mind trying again in a moment?" },
        { status: 429 }
      );
    }

    return Response.json(
      { reply: "Sorry, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}