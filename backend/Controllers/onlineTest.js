import { GoogleGenerativeAI } from "@google/generative-ai";
import { jsonrepair } from "jsonrepair";

export const generateMcqForLaw = async (req, res) => {
  const { law, difficulty = "medium", language = "en" } = req.body;

  if (!law || typeof law !== "string") {
    return res.status(400).json({ error: 'Please provide a valid "law".' });
  }

  const genAI = new GoogleGenerativeAI('AIzaSyAUcCP-WoOD2Xy16-5YwgOJZ5Y--gXAfrA'); // store key safely in .env
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are an expert legal educator.  
Generate **exactly 15 multiple-choice questions (MCQs)** strictly based on **valid Indian laws, Acts, or Sections only**.  

Law provided: "${law}"

⚠️ Rules:
- If the input is **not a valid Indian law, Act, or Section**, return exactly:
  { "questions": [] }
- If valid, generate MCQs only from **recognized legal sources** (e.g., Indian Penal Code 1860, Indian Contract Act 1872, IT Act 2000, Constitution of India, etc.)
- Each MCQ must follow this JSON schema:

{
  "questions": [
    {
      "id": 1,
      "question": "string",
      "options": ["A","B","C","D"],
      "answer": 0,   // index of correct option
      "explanation": "string"
    }
  ]
}

- Do not include extra text, formatting, markdown, or explanations outside JSON.
- The answer index must match the correct option from the "options" array.
- Language: ${language}
- Difficulty: ${difficulty}
`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let repairedJson;
    try {
      repairedJson = jsonrepair(text);
      const parsed = JSON.parse(repairedJson);
      return res.json(parsed);
    } catch (e) {
      console.error("❌ JSON Repair Failed:", e.message);
      return res.status(502).json({
        error: "Failed to repair/parse Gemini response as JSON",
        raw: text.slice(0, 500),
      });
    }
  } catch (error) {
    console.error("❌ Gemini API Error:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while generating MCQs." });
  }
};
