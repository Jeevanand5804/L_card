import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", auth, getProfile);
router.get("/me", auth, getProfile);

export default router;