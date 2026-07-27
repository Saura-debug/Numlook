"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!process.env.DATABASE_URL)
    throw new Error("DATABASE_URL is missing");
if (!process.env.JWT_SECRET)
    throw new Error("JWT_SECRET is missing");
if (!process.env.ABSTRACT_API_KEY)
    throw new Error("ABSTRACT_API_KEY is missing");
//# sourceMappingURL=env.js.map