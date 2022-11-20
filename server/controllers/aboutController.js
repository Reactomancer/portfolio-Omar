import mongoose from "mongoose";
import About from "../models/aboutModel.js";

export const getAbouts = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAbout = async (req, res) => {
  const about = req.body;
  const newAbout = new About(about);
  try {
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const { id: _id, ...about } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No about with that id");
    const updatedAbout = await About.findByIdAndUpdate(_id, about, {
      new: true,
    });
    res.json(updatedAbout);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteAbout = async (req, res) => {
  try {
    const { id: _id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No about with that id");
    await About.findByIdAndRemove(_id);
    res.json({ message: "About deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
