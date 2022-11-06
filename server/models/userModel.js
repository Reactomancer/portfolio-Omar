import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
