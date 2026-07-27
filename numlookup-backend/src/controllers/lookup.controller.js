"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lookup_service_1 = __importDefault(require("../services/lookup.service"));
class LookupController {
    async lookup(req, res, next) {
        try {
            const { phone } = req.query;
            if (!phone || typeof phone !== "string") {
                return res.status(400).json({
                    success: false,
                    message: "Phone number is required",
                });
            }
            const userId = req.user.userId;
            // const userId = (req as any).user.userId
            const result = await lookup_service_1.default.lookup(phone, userId);
            return res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new LookupController();
//# sourceMappingURL=lookup.controller.js.map