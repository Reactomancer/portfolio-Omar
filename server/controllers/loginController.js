import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
