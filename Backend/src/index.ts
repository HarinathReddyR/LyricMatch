import express, { Express, Request, Response , Application } from 'express';
import * as config from "../config-local";
import cors from "cors";
import coreRouter from './coreRouter';
import * as logger from "./services/logger";

//For env File 
// dotenv.config();

const app: Express = express();
const port = config.port;
app.use(express.json());
app.use(cors());
app.use("/api", coreRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// Only start the server locally, NOT on Vercel
if (process.env.NODE_ENV !== "production") {
  const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  function gracefulClose(signal: string) {
    logger.log("info", `Received ${signal} initiating server close`);
    server.close(() => logger.log("info", "Server closed"));
    process.exit();
  }
}

// Export the app for Vercel
export default app;
