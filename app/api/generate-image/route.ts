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
      quality: 'hd',
      size: '1792x1024',
    });

    const imageUrl = response.data[0].url;

    console.log(imageUrl);

    return Response.json('Image Generated');

  } catch (error) {
    return Response.json('Server error: error fetching Open AI');
  };
};
