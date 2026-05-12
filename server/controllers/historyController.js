import History from "../models/History.js";
import User from "../models/User.js";

export const getHistory = async (req, res) => {
  try {
    const history = await History.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .lean();

    res.json(history);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const createHistory = async (req, res) => {
  try {
    const { label, points, type, icon } = req.body;

    if (!label || !Number.isFinite(points) || !type) {
      return res.status(400).json({
        msg: "label, points, and type are required",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $inc: { points } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const history = await History.create({
      user: req.user.id,
      label,
      points,
      type,
      icon,
    });

    res.status(201).json({
      history,
      points: user.points,
    });
  } catch (err) {
    try {
      if (req.user?.id && Number.isFinite(req.body?.points)) {
        await User.findByIdAndUpdate(req.user.id, {
          $inc: { points: -req.body.points },
        });
      }
    } catch {
      // Best-effort rollback only.
    }

    res.status(500).json({ msg: err.message });
  }
};

export const createHistoryEntry = async ({ user, label, points, type, icon }) => {
  return History.create({ user, label, points, type, icon });
};