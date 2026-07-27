import { Router } from "express";
import lookupController from "../controllers/lookup.controller";
import { authenticate } from "../middleware/auth.middleware";
import { lookupRateLimiter } from "../middleware/rateLimit.middleware";
const router = Router();

router.get("/lookup",authenticate,lookupRateLimiter, lookupController.lookup);

export default router;