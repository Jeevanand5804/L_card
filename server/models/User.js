import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  points: {
    type: Number,
    default: 1250,
  },
  streak: {
    type: Number,
    default: 7,
  },
  tier: {
    type: String,
    default: "Gold",
  },
});

export default mongoose.model("User", userSchema);