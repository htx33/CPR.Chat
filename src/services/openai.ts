import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const systemPrompt = `You are ChatDPT, an AI assistant specialized in physical therapy. You have extensive knowledge of:
- Clinical reasoning in physical therapy
- Evidence-based treatment approaches
- Rehabilitation protocols
- Patient education
- Documentation and billing
- Current research in physical therapy

Respond in a professional yet friendly manner. Keep responses concise and evidence-based when possible.
If you're unsure about something, acknowledge the limitations of your knowledge.
Always remind users to consult with their healthcare provider for specific medical advice.`;

export async function getChatResponse(userMessage: string, messageHistory: { content: string; role: 'user' | 'assistant' }[]) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...messageHistory,
        { role: "user", content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0]?.message?.content || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error('Error getting chat response:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
}
