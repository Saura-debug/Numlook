import { Router } from "express";

import healthController from "../controllers/health.controllers";


const router = Router();
router.get("/health",healthController.healthcheck)
