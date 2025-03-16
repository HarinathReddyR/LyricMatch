import { Request, Response } from "express";
import { generateLyricSnippet } from "../services/llm";
import { songs } from "../data/songs";
import * as logger from "../services/logger";
import { v4 as uuidv4 } from "uuid"

const songStorage = new Map<string, { lyrics: string; songTitle: string }>();
export async function getLyricSnippet(req: Request, res: Response) {
    try {
        logger.log("info", "Lyric Request");
        const randomSong:string= songs[Math.floor(Math.random() * songs.length)];
        // console.log(randomSong);
        const lyrics:string = await generateLyricSnippet("Shape of You");
        const id = uuidv4(); 

        
        songStorage.set(id, {lyrics: lyrics, songTitle: randomSong });


        res.json({id,lyrics});
    } catch (error) {
        logger.log("error","Failed to generate lyric snippet.")
        res.status(500).json({ error: "Failed to generate lyric snippet." });
    }
}

export function check(req: Request, res: Response) {
    try{
        logger.log("info", "song guess check");
        const {id,guess} = req.body;
        const songData = songStorage.get(id);
        if (!songData) {
            logger.log("info", "song not found");
            res.json({ correct: false, actualTitle: "Song not found!" });
            return;
        }
        const correct = songData?.songTitle.toLowerCase() === guess.toLowerCase();
        res.json({ correct, actualTitle: songData?.songTitle });
    }catch (error) {
        logger.log("error","Failed to guess lyric snippet.")
        res.status(500).json({ error: "Failed to guess lyric snippet." });
    }
}
