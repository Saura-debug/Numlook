"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lookup_controller_1 = __importDefault(require("../controllers/lookup.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const rateLimit_middleware_1 = require("../middleware/rateLimit.middleware");
const router = (0, express_1.Router)();
router.get("/lookup", auth_middleware_1.authenticate, rateLimit_middleware_1.lookupRateLimiter, lookup_controller_1.default.lookup);
exports.default = router;
//# sourceMappingURL=lookup.routes.js.map