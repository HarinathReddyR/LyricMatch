import { genAI } from "../../config-local";

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function generateLyricSnippet(randomSong:string): Promise<string> {
    try {
            const prompt = `Generate 2-4 lines of lyrics inspired by the song ${randomSong}. please do not mention the title of the song in the lyrics.i don't want you to write new lyrics give existing lyrics of that song`;
            const result = await model.generateContent(prompt);
            // console.log(result.response.text());
        return result.response.text() ?? "No response generated.";
        // return "The movement you need is within your heart,\nLet the feeling flow, tear it all apart.\nTake a deep breath, let the sadness subside,\nFind your own strength, let your spirit ride.\n";
    } catch (error) {
        console.error("Error calling Gemini AI:", error);
        return "An error occurred while processing your request.";
    }
}