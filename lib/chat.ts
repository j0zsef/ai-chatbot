'use server';

import OpenAI from 'openai';

const openaiAPI = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const getChatResponse = async (message: string): Promise<string> => {
  let response = '';

  const completion = await openaiAPI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0.6,
    messages: [{ role: 'user', content: message }],
  });

  completion.choices.forEach((choice) => {
    response += choice.message.content;
  });

  return response;
};

export default getChatResponse;
