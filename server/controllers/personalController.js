import Personal from "../models/personalModel.js";

export const getPersonal = async (req, res) => {
  try {
    const personal = await Personal.find();

    if (personal) res.status(200).json(personal);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Couldn't find personal info, Please try again later" });
  }
};

export const updatePersonal = async (req, res) => {
  try {
    const { id, ...personal } = req.body;
    const updatedPersonal = await Personal.findByIdAndUpdate(id, personal, {
      new: true,
    });
    res.json(updatedPersonal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
