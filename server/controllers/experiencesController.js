import mongoose from "mongoose";
import ExperiencesModel from "../models/experiencesModel.js";
export const getExperiences = async (req, res) => {
  try {
    const experiences = await ExperiencesModel.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

export const addExperiences = async (req, res) => {
  try {
    const experience = req.body;
    const newExperience = new ExperiencesModel(experience);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deleteExperience = async (req, res) => {
  const { id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "INVALID ID" });
  }
  const experience = await ExperiencesModel.find({ _id: id });
  await ExperiencesModel.findByIdAndRemove(id);
  res.status(201).json(experience);
};

export const updateExperience = async (req, res) => {
  const { year, companies, id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "INVALID ID" });
  }
  const experience = await ExperiencesModel.find({ _id: id });
  await ExperiencesModel.findByIdAndUpdate(id, {
    year,
    companies,
  });
  res.status(201).json(experience);
};
