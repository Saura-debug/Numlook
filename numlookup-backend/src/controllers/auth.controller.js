"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth.service"));
const auth_validator_1 = require("../validation/auth.validator");
class AuthController {
    async register(req, res, next) {
        try {
            const registerData = auth_validator_1.registerSchema.parse(req.body);
            const result = await auth_service_1.default.register(registerData);
            return res.status(201).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const loginData = auth_validator_1.loginSchema.parse(req.body);
            const result = await auth_service_1.default.login(loginData);
            return res.status(200).json({
                success: true,
                data: result
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map