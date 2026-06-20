import Reward from "../models/Reward.js";
import User from "../models/User.js";
import { createHistoryEntry } from "./historyController.js";

const defaultRewards = [
  {
    id: 1,
    title: "Free Coffee",
    subtitle: "Any size, any blend",
    pointsRequired: 2000,
  },
  {
    id: 2,
    title: "Artisan Sandwich",
    subtitle: "Fresh and made to order",
    pointsRequired: 2500,
  },
  {
    id: 3,
    title: "Chocolate Cake",
    subtitle: "Single slice",
    pointsRequired: 1800,
  },
  {
    id: 4,
    title: "L-Card Tumbler",
    subtitle: "Limited edition",
    pointsRequired: 4000,
  },
];

export const getRewards = async (req, res) => {
  const rewards = await Reward.find();
  res.json(rewards);
};

export const getRewardCatalog = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("points");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const rewards = await Reward.find();
    const catalog = (rewards.length > 0 ? rewards : defaultRewards).map((reward) => ({
      id: reward._id?.toString?.() ?? reward.id,
      title: reward.title,
      subtitle: reward.subtitle,
      points: reward.pointsRequired ?? reward.points,
      isUnlocked: user.points >= (reward.pointsRequired ?? reward.points),
    }));

    res.json({
      userPoints: user.points,
      rewards: catalog,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
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