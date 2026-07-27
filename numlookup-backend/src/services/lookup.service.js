"use strict";
// services/lookup.service.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lookup_repository_1 = __importDefault(require("../repositories/lookup.repository"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const phone_1 = require("../utils/phone");
class LookupService {
    async lookup(phone, userId) {
        phone = (0, phone_1.normalizePhoneNumber)(phone);
        if (!(0, phone_1.isValidPhoneNumber)(phone)) {
            throw new AppError_1.default("Invalid phone number", 400);
        }
        return await lookup_repository_1.default.lookup(phone, userId);
    }
}
exports.default = new LookupService();
//# sourceMappingURL=lookup.service.js.map