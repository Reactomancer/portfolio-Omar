import express from "express";
import {
  getWorks,
  addWork,
  deleteWork,
  updateWork,
} from "../controllers/worksController.js";
const router = express.Router();
router.get("/", getWorks);
router.post("/", addWork);
router.delete("/", deleteWork);
router.put("/", updateWork);

export default router;
