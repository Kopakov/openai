export default async function generateImage(input: string) {
  const res = await fetch('/api/generate-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input }),
  });

  const data = await res.json();
  return data;
};
