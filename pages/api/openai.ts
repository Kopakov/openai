import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  };
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const params: OpenAI.Chat.CompletionCreateParams = {
      messages: [{ role: 'assistant', content: req.body.prompt }],
      model: 'gpt-3.5-turbo',
      max_tokens: 100,
    };
    const completion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);

    console.log(completion);

    res.status(200).json(completion);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  };
};
