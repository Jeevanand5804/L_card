import express from "express";
import { getRewards, getRewardCatalog, redeemReward } from "../controllers/rewardController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRewards);
router.get("/catalog", auth, getRewardCatalog);
router.post("/redeem/:id", auth, redeemReward);

export default router;