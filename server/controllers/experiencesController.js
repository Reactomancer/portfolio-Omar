import experiencesModel from "../models/experiencesModel.js";
export const getExperiences = async (req, res) => {
  try {
    const experiences = await experiencesModel.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};
