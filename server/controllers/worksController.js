import Work from "../models/workModel.js";
export const getWorks = async (req, res) => {
  try {
    const work = await Work.find();
    if (work) res.status(200).json(work);
  } catch (error) {
    res.status(404).json({ message: "Fetching works failed" });
  }
};

export const addWork = async (req, res) => {
  const work = req.body;
  console.log(work);
  const newWork = new Work(work);
  try {
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(409).json({ message: "Adding work failed" });
  }
};

export const deleteWork = async (req, res) => {
  const id = req.body.id;
  try {
    await Work.findByIdAndRemove(id).exec();
    res.send("Deleted");
  } catch (error) {
    console.log(error);
  }
};

export const updateWork = async (req, res) => {
  const { id, ...work } = req.body;
  try {
    await Work.findByIdAndUpdate(id, work).exec();
    res.send("Updated");
  } catch (error) {
    console.log(error);
  }
};
