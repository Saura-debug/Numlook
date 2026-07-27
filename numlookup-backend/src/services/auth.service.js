"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_repository_1 = __importDefault(require("../repositories/auth.repository"));
const jwt_1 = require("../utils/jwt");
const AppError_1 = __importDefault(require("../utils/AppError"));
class AuthService {
    async register(data) {
        const existingUser = await auth_repository_1.default.findByEmail(data.email);
        if (existingUser) {
            throw new AppError_1.default("User already exists", 409);
        }
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        const user = await auth_repository_1.default.createUser(data);
        const token = (0, jwt_1.generateToken)(user.id);
        return {
            user,
            token,
        };
    }
    async login(data) {
        const user = await auth_repository_1.default.findByEmail(data.email);
        if (!user) {
            throw new AppError_1.default("Invalid credentials", 401);
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(data.password, user.password);
        if (!isPasswordCorrect) {
            throw new AppError_1.default("Invalid credentials", 401);
        }
        const token = (0, jwt_1.generateToken)(user.id);
        return {
            user,
            token,
        };
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth.service.js.map