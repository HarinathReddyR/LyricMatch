import  OpenAI   from "openai";
import 'dotenv/config';
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const port: number = parseInt(process.env.PORT ?? "6969");
export const env: string = process.env.env || process.argv[2] || "pro"

const API_KEY = process.env.GEMINI_API_KEY;
export const genAI = new GoogleGenerativeAI(API_KEY);

export const logInConsole = process.env.CONSOLE_LOG || true


// export const openAiCon = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });