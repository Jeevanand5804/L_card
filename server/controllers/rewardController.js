import Reward from "../models/Reward.js";
import User from "../models/User.js";
import { createHistoryEntry } from "./historyController.js";

export const getRewards = async (req, res) => {
  const rewards = await Reward.find();
  res.json(rewards);
};

export const redeemReward = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const reward = await Reward.findById(req.params.id);

    if (!user || !reward) {
      return res.status(404).json({ msg: "User or reward not found" });
    }

    if (user.points < reward.pointsRequired) {
      return res.status(400).json({ msg: "Not enough points" });
    }

    user.points -= reward.pointsRequired;
    await user.save();

    await createHistoryEntry({
      user: user._id,
      label: `Redeemed ${reward.title}`,
      points: -reward.pointsRequired,
      type: "redeem",
      icon: "Gift",
    });

    res.json({ msg: "Reward redeemed", points: user.points });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};