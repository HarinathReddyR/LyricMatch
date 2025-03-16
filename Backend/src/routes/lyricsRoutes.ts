
import express from "express";
import { check, getLyricSnippet } from "../controllers/lyricsController";

const router = express.Router();

router.get("/generate", getLyricSnippet);
router.post("/guess", check);

export default router;
