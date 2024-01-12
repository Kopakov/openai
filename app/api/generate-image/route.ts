import OpenAI from 'openai';

// TODO: Move to file if image generation works
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const response = await openai.images.generate({
      prompt: prompt,
      model: 'dall-e-3',
      // quality: 'standard',
      size: '1024x1024',
      style: 'vivid',
    });
    const imageUrl = response.data[0].url;

    return Response.json(imageUrl);
  } catch (error: any) {
    return Response.json({
      error: true,
      message: error.error.message,
    });
  };
};
