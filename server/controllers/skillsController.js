import mongoose from "mongoose";
import Skills from "../models/skillsModel.js";
export const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
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
    const updatedSkill = await Skills.findByIdAndUpdate(id, skill, {
      new: true,
    });
    res.json(updatedSkill);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addSkill = async (req, res) => {
  try {
    const skill = req.body;
    const newSkill = new Skills(skill);
    console.log(skill);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id: _id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No skill with that id");
    await Skills.findByIdAndRemove(_id);
    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
