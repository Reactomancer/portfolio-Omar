import express from "express";
import { getSkills, updateSkill } from "../controllers/topSkillsController.js";
const router = express.Router();
router.get("/", getSkills);
router.put("/", updateSkill);

export default router;
