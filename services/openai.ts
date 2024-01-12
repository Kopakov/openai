import { generateText, generateImage } from './';
import { ModeType } from 'types';

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
