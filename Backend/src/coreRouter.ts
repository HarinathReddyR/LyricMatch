import { Router } from "express";
import lyricsRoutes from "./routes/lyricsRoutes";
// import guessRoutes from "./routes/guessRoutes";
const router = Router();
router.use("/lyrics", lyricsRoutes);
// router.use("/", guessRoutes);
export default router;