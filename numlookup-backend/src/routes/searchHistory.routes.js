"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchHistory_controller_1 = __importDefault(require("../controllers/searchHistory.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get("/", auth_middleware_1.authenticate, searchHistory_controller_1.default.getHistory);
exports.default = router;
//# sourceMappingURL=searchHistory.routes.js.map