import mongoose from "mongoose";
const testimonialsSchema = mongoose.Schema([
  {
    name: String,
    img: String,
    position: String,
    comment: String,
  },
]);
const Testimonials = mongoose.model("Testimonials", testimonialsSchema);
export default Testimonials;
