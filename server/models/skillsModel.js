import mongoose from "mongoose";

const skillsSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  stars: { type: Number, required: true },
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;
