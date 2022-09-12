import mongoose from "mongoose";
const experiencesSchema = mongoose.Schema([
  {
    year: {
      type: Number,
      required: true,
    },
    companies: [
      {
        companyName: String,
        position: String,
      },
    ],
  },
]);
const experiencesModel = mongoose.model("Experiences", experiencesSchema);
export default experiencesModel;
