import Testimonials from "../models/testimonialsModel.js";
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonials.find();
    if (testimonials) res.status(200).json(testimonials);
  } catch (error) {
    res
      .statu(404)
      .json({ message: "Couldn't find testimonials, Please try again later" });
  }
};
