import express from "express";
import { getWorks } from "../controllers/worksController.js";
const router = express.Router();
router.get("/", getWorks);
export default router;
