import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  title: String,
  description: String,
  imgURL: String,
});
const About = mongoose.model("Model-2", aboutSchema, "about");

export default About;
