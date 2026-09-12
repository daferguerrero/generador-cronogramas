import express from "express";
import cors from "cors";

import planningRoutes from "./routes/planning.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/planning', planningRoutes)

export default app;