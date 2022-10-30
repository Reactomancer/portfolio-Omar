import mongoose from "mongoose";

const personalSchema = mongoose.Schema({
  name: String,
  cvLink: String,
  position: String,
});
const PersonalInfo = mongoose.model("Personal", personalSchema);

export default PersonalInfo;
