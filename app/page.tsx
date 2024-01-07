'use client';

import { Inter } from 'next/font/google';
import { useState, FormEvent } from 'react';

const inter = Inter({ subsets: ['latin'] });

async function getCompletions(prompt: string) {
  const res = await fetch('/api/openai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'test-prompt------------------------' }),
  });
  const completions = await res.json()

  return completions;
};

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const response = data.choices[0].message.content;
      setResponse(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setResponse('Error fetching Open AI. Please try again or reload page');
    };
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 bg-white ${inter.className}`}
    >
      <h1 className="font-bold text-3xl mb-10">
        Ask AI
      </h1>

      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-24 border border-gray-300 rounded p-4 outline-none transition-all mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>

        {loading && 'Loading...'}

        {response && (
          <div className="mt-4 p-4 border rounded shadow">
            <p className="mt-2 text-gray-700">{response}</p>
          </div>
        )}
      </div>

    </main>
  )
}
