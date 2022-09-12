import express from "express";
import { getTestimonials } from "../controllers/testimonialsController.js";
const router = express.Router();
router.get("/", getTestimonials);
export default router;
