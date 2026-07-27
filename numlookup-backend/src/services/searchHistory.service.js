"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchHistory_repository_1 = __importDefault(require("../repositories/searchHistory.repository"));
class SearchHistoryService {
    async getUserHistory(userId, page, limit) {
        return searchHistory_repository_1.default.getUserHistory(userId, page, limit);
    }
}
exports.default = new SearchHistoryService();
//# sourceMappingURL=searchHistory.service.js.map