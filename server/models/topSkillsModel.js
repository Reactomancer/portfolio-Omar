import mongoose from "mongoose";

const topSkillsSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const TopSkills = mongoose.model("top-skills", topSkillsSchema);

export default TopSkills;
