export default async function generateText(input: string) {
  const res = await fetch('/api/generate-text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input }),
  });

  const data = await res.json();
  const response = data.choices[0].message.content;

  return response;
};