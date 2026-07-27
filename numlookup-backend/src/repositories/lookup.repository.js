"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../prisma/client"));
const axios_1 = require("../config/axios");
const axios_2 = __importDefault(require("axios"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const client_2 = require("@prisma/client");
const abstract_mapper_1 = require("../mappers/abstract.mapper");
const cache_1 = require("../constants/cache");
class LookupRepository {
    async lookup(phone, userId) {
        const cached = await client_1.default.phoneLookup.findUnique({
            where: {
                phoneNumber: phone,
            },
        });
        if (cached) {
            const expired = Date.now() - cached.lastFetched.getTime() > cache_1.CACHE_EXPIRY_MS;
            // Cache Hit
            if (!expired) {
                await client_1.default.searchHistory.create({
                    data: {
                        userId,
                        phoneLookupId: cached.id,
                    },
                });
                return cached;
            }
        }
        // Cache Miss OR Expired Cache
        let data;
        try {
            const response = await axios_1.abstractApi.get("/", {
                params: {
                    api_key: process.env.ABSTRACT_API_KEY,
                    phone,
                },
            });
            data = response.data;
        }
        catch (error) {
            if (axios_2.default.isAxiosError(error)) {
                throw new AppError_1.default("Phone lookup service unavailable", 503);
            }
            throw error;
        }
        const lookupData = (0, abstract_mapper_1.mapAbstractResponse)(data);
        // Expired Cache -> Update
        if (cached) {
            const updated = await client_1.default.phoneLookup.update({
                where: {
                    phoneNumber: phone,
                },
                data: {
                    ...lookupData,
                    lastFetched: new Date(),
                },
            });
            await client_1.default.searchHistory.create({
                data: {
                    userId,
                    phoneLookupId: updated.id,
                },
            });
            return updated;
        }
        // New Lookup
        try {
            const saved = await client_1.default.$transaction(async (tx) => {
                const lookup = await tx.phoneLookup.create({
                    data: {
                        phoneNumber: phone,
                        ...lookupData,
                    },
                });
                await tx.searchHistory.create({
                    data: {
                        userId,
                        phoneLookupId: lookup.id,
                    },
                });
                return lookup;
            });
            return saved;
        }
        catch (error) {
            if (error instanceof client_2.Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002") {
                const existing = await client_1.default.phoneLookup.findUnique({
                    where: {
                        phoneNumber: phone,
                    },
                });
                if (!existing) {
                    throw error;
                }
                await client_1.default.searchHistory.create({
                    data: {
                        userId,
                        phoneLookupId: existing.id,
                    },
                });
                return existing;
            }
            throw error;
        }
    }
}
exports.default = new LookupRepository();
//# sourceMappingURL=lookup.repository.js.map