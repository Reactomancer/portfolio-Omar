import Work from "../models/workModel.js";
export const getWorks = async (req, res) => {
  try {
    const work = await Work.find();
    if (work) res.status(200).json(work);
  } catch (error) {
    res.status(404).json({ message: "Fetching works failed" });
  }
};
