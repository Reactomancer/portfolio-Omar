import express from "express";
import {
  getPersonal,
  updatePersonal,
} from "../controllers/personalController.js";

const router = express.Router();

router.get("/", getPersonal);
router.put("/", updatePersonal);

export default router;
