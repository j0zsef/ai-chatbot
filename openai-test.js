import OpenAI from "openai";
import "dotenv/config";
import { createRequire } from "module";

async function main() {
  const require = createRequire(import.meta.url);
  require("dotenv").config();
  const openAIKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({
    apiKey: openAIKey,
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
