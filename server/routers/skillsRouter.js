import express from "express";
import {
  getSkills,
  addSkill,
  deleteSkill,
  updateSkill,
} from "../controllers/skillsController.js";
const router = express.Router();
router.get("/", getSkills);
router.put("/", updateSkill);
router.post("/", addSkill);
router.delete("/", deleteSkill);
export default router;
