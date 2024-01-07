import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const completions = await openai.chat.completions.create({
      messages: [{
        role: 'assistant',
        content: prompt,
      }],
      model: 'gpt-3.5-turbo',
      max_tokens: 100,
    });
    return Response.json(completions);
  } catch (error: any) {
    return Response.json('Server error: error fetching Open AI');
  };
};
