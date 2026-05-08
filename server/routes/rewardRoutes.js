import express from "express";
import { getRewards, redeemReward } from "../controllers/rewardController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRewards);
router.post("/redeem/:id", auth, redeemReward);

export default router;