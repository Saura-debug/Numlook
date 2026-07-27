"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../prisma/client"));
class SearchHistoryRepository {
    async getUserHistory(userId, page, limit) {
        const [history, total] = await client_1.default.$transaction([
            client_1.default.searchHistory.findMany({
                where: {
                    userId,
                },
                include: {
                    phoneLookup: true,
                },
                orderBy: {
                    searchedAt: "desc",
                },
                skip: (page - 1) * limit,
                take: limit,
            }),
            client_1.default.searchHistory.count({
                where: {
                    userId,
                },
            }),
        ]);
        return {
            history,
            total,
        };
    }
}
exports.default = new SearchHistoryRepository();
//# sourceMappingURL=searchHistory.repository.js.map