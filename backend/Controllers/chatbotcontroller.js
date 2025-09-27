import { GoogleGenerativeAI } from "@google/generative-ai";

export const chatWithBot = async (req, res) => {
  const { query, history = [] } = req.body;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: 'Please provide a valid "query".' });
  }

  try {
    // init Gemini with API key from .env
    const genAI = new GoogleGenerativeAI('AIzaSyAUcCP-WoOD2Xy16-5YwgOJZ5Y--gXAfrA');
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // simple prompt with optional history
    let prompt = "You are a helpful assistant which gives me one line answer\n\n";
    history.forEach((msg) => {
      prompt += `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}\n`;
    });
    prompt += `User: ${query}\nAssistant:`;

    // call Gemini
    const result = await model.generateContent(prompt);
    const answer = result.response.text();

    return res.json({ answer });
  } catch (error) {
    console.error("❌ Chatbot Error:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while generating chatbot response." });
  }
};
