import express from "express";
import auth from "../middleware/authMiddleware.js";
import { createHistory, getHistory } from "../controllers/historyController.js";

const router = express.Router();

router.get("/", auth, getHistory);
router.post("/", auth, createHistory);

export default router;