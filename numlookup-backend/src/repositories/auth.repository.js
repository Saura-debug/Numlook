"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../prisma/client"));
class AuthRepository {
    async findByEmail(email) {
        return client_1.default.user.findUnique({
            where: {
                email,
            },
        });
    }
    async createUser(data) {
        return client_1.default.user.create({
            data
        });
    }
}
exports.default = new AuthRepository();
//# sourceMappingURL=auth.repository.js.map