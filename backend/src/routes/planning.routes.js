import { Router } from "express";
import multer from "multer";
import * as planningController from "../controllers/planning.controller.js";

const router = Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/upload", upload.single("planning"), planningController.upload);

export default router;
