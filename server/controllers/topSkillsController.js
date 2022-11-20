import mongoose from "mongoose";
import TopSkills from "../models/topSkillsModel.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await TopSkills.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id, ...skill } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No skill with that id");
    const updatedSkill = await TopSkills.findByIdAndUpdate(id, skill, {
      new: true,
    });
    res.json(updatedSkill);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
