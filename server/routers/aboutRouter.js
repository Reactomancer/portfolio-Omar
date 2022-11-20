import express from "express";
import {
  createAbout,
  deleteAbout,
  getAbouts,
  updateAbout,
} from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", getAbouts);
router.post("/", createAbout);
router.put("/", updateAbout);
router.delete("/", deleteAbout);

export default router;
