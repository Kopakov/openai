import { ModeType } from 'types';

// Text generation
async function generateText(input: string) {
  const res = await fetch('/api/generate-text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input }),
  });

  const data = await res.json();
  const response = data.choices[0].message.content;

  return response;
};

// Image generation
async function generateImage(input: string) {
  const res = await fetch('/api/generate-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input }),
  });

  const data = await res.json();
  return data;
};

// Content generation switch. Use in components
export async function generateContent(mode: ModeType, input: string) {
  switch (mode) {
    case 'text':
      return generateText(input);
    case 'image':
      return generateImage(input);
    default:
      return `No content mode found. Trying generate content in mode: '${mode}'`;
  };
};
