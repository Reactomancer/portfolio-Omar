import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import cors from "cors";
import skillsRouter from "../routers/skillsRouter.js";
import experiencesRouter from "../routers/experiencesRouter.js";
import sendEmailRouter from "../routers/sendEmailRouter.js";
import testimonialsRouter from "../routers/testimonialsRouter.js";
import worksRouter from "../routers/workRouter.js";
import personalRouter from "../routers/personalRouter.js";
import loginRouter from "../routers/loginRouter.js";
import topSkillsRouter from "../routers/topSkillsRouter.js";
import aboutRouter from "../routers/aboutRouter.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/skills", skillsRouter);
app.use("/experiences", experiencesRouter);
app.use("/sendemail", sendEmailRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/work", worksRouter);
app.use("/personal", personalRouter);
app.use("/login", loginRouter);
app.use("/top-skills", topSkillsRouter);
app.use("/about", aboutRouter);
app.get("/download", (req, res) => {
  const file = `${__dirname}/downloads/OmarCV.pdf`;
  res.download(file);
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT : ${PORT}`))
  )
  .catch((err) => console.log(err.message));
