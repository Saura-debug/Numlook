import { Router } from "express";
import searchHistoryController from "../controllers/searchHistory.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  searchHistoryController.getHistory
);

export default router;