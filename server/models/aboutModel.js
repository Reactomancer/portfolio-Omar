import mongoose from "mongoose";
const aboutSchema = mongoose.Schema({
  category: String,
  description: String,
  img: String,
});
const About = mongoose.model("About", aboutSchema);
export default About;
