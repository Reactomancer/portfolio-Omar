import mongoose from "mongoose";

const personalSchema = mongoose.Schema({
  name: String,
  cvLink: String,
  position: String,
});
const Personal = mongoose.model("Model", personalSchema, "personal");

export default Personal;
