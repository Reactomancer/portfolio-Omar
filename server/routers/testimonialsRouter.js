import express from "express";
import {
  getTestimonials,
  deleteTestimonial,
  addTestimonial,
  updateTestimonial,
} from "../controllers/testimonialsController.js";
const router = express.Router();
router.get("/", getTestimonials);
router.delete("/", deleteTestimonial);
router.post("/", addTestimonial);
router.put("/", updateTestimonial);
export default router;
