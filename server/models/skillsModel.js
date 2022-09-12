import mongoose from "mongoose";
const skillsSchema = mongoose.Schema({
  icons: [
    {
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
      start: Number,
    },
  ],
  experiences: {
    year: Number,
    companies: [
      {
        position: String,
        companyName: String,
      },
    ],
  },
});
const Skills = mongoose.model("Skills", skillsSchema);
export default Skills;
