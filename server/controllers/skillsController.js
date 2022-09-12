import Skills from "../models/skillsModel.js";
export const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    console.log(skills);
    res.status(200).json(skills);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};
