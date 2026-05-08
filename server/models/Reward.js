import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  pointsRequired: Number
});

export default mongoose.model("Reward", rewardSchema);