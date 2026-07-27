"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./config/env");
const client_1 = __importDefault(require("./prisma/client"));
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
process.on("SIGINT", async () => {
    console.log("Shutting down...");
    await client_1.default.$disconnect();
    process.exit(0);
});
//# sourceMappingURL=server.js.map