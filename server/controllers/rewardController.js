import Reward from "../models/Reward.js";
import User from "../models/User.js";

export const getRewards = async (req, res) => {
  const rewards = await Reward.find();
  res.json(rewards);
};

export const redeemReward = async (req, res) => {
  const user = await User.findById(req.user.id);
  const reward = await Reward.findById(req.params.id);

  if (user.points < reward.pointsRequired) {
    return res.status(400).json({ msg: "Not enough points" });
  }

  user.points -= reward.pointsRequired;
  await user.save();

  res.json({ msg: "Reward redeemed", points: user.points });
};