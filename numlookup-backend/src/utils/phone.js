"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePhoneNumber = normalizePhoneNumber;
exports.isValidPhoneNumber = isValidPhoneNumber;
function normalizePhoneNumber(phone) {
    return phone.replace(/[^\d+]/g, "");
}
function isValidPhoneNumber(phone) {
    // Simple E.164 validation
    const regex = /^\+?[1-9]\d{7,14}$/;
    return regex.test(phone);
}
//# sourceMappingURL=phone.js.map