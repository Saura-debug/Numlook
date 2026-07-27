"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class healthcontroller {
    async healthcheck(req, res, next) {
        res.status(200).json({
            success: true,
            status: "OK",
            timestamp: new Date().toISOString(),
        });
    }
}
exports.default = new healthcontroller();
//# sourceMappingURL=health.controllers.js.map