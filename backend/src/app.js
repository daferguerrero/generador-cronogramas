import express from "express";
import cors from "cors";

import planningRoutes from "./routes/planning.routes.js";
import scheduleConfigRoutes from "./routes/schedule-config.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/planning', planningRoutes);
app.use('/schedule-config', scheduleConfigRoutes);

export default app;