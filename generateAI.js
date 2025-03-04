import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "REDACTED", // TURN THIS INTO A ENVIRONMENT VARIABLE !!!!
});

const completion = openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));

// use bullet points to minimize token usage
// 1000 words + bullet points gives an estimated 21,428 requests per month
// keeps us in budget of 18$ a month