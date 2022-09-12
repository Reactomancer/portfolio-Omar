import mongoose from "mongoose";
const workSchema = mongoose.Schema([
  {
    name: String,
    img: String,
    tag: String,
    githubLink: String,
    hostingLink: String,
  },
]);
const Work = mongoose.model("Work", workSchema);
export default Work;
