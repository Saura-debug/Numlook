"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchHistory_service_1 = __importDefault(require("../services/searchHistory.service"));
class SearchHistoryController {
    async getHistory(req, res, next) {
        try {
            const userId = req.user.userId;
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const result = await searchHistory_service_1.default.getUserHistory(userId, page, limit);
            return res.status(200).json({
                success: true,
                page,
                limit,
                total: result.total,
                totalPages: Math.ceil(result.total / limit),
                data: result.history,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new SearchHistoryController();
//# sourceMappingURL=searchHistory.controller.js.map