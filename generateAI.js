const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateContent() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("API key is missing. Please set the GOOGLE_API_KEY environment variable.");
        return;
    }

    const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explain how AI works";

    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

generateContent();
