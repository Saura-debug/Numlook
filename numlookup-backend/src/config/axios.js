"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractApi = void 0;
const axios_1 = __importDefault(require("axios"));
exports.abstractApi = axios_1.default.create({
    baseURL: "https://phonevalidation.abstractapi.com/v1/",
    timeout: 10000,
});
//# sourceMappingURL=axios.js.map