import mongoose from "mongoose";
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
export const addTestimonial = async (req, res) => {
  try {
    const testimonial = req.body;
    const newTestimonial = new Testimonials(testimonial);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateTestimonial = async (req, res) => {
  try {
    const { id: _id, ...testimonial } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No testimonial with that id");
    const updatedTestimonial = await Testimonials.findByIdAndUpdate(
      _id,
      testimonial,
      {
        new: true,
      }
    );
    res.json(updatedTestimonial);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteTestimonial = async (req, res) => {
  try {
    const { id: _id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No testimonial with that id");
    await Testimonials.findByIdAndRemove(_id);
    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
