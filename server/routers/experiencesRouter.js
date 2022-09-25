import express from "express";
import {
  getExperiences,
  addExperiences,
  deleteExperience,
  updateExperience,
} from "../controllers/experiencesController.js";
const router = express.Router();
router.get("/", getExperiences);
router.post("/", addExperiences);
router.delete("/", deleteExperience);
router.put("/", updateExperience);
export default router;
