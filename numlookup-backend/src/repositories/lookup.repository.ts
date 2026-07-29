import prisma from "../prisma/client";
import { abstractApi } from "../config/axios";
import axios from "axios";
import AppError from "../utils/AppError";
import { Prisma } from "@prisma/client";
import { mapAbstractResponse } from "../mappers/abstract.mapper";
import { CACHE_EXPIRY_MS } from "../constants/cache";

class LookupRepository {
  async lookup(phone: string, userId: string) {
    const cached = await prisma.phoneLookup.findUnique({
      where: {
        phoneNumber: phone,
      },
    });

    if (cached) {
      

      const expired =
        Date.now() - cached.lastFetched.getTime() > CACHE_EXPIRY_MS;

      // Cache Hit
      if (!expired) {
        await prisma.searchHistory.create({
          data: {
            userId,
            phoneLookupId: cached.id,
          },
        });

        return cached;
      }
    }

    // Cache Miss OR Expired Cache
    let data: any;
    console.log(process.env.ABSTRACT_API_KEY);

    try {
      const response = await abstractApi.get("/", {
        params: {
          api_key: process.env.ABSTRACT_API_KEY,
          phone,
        },
      });

      data = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
         console.error("Abstract API Error:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);

        throw new AppError("Phone lookup service unavailable", 503);
      }

      throw error;
    }
 
   console.log("RAW DATA:");
console.dir(data, { depth: null });
  const lookupData = mapAbstractResponse(data);
  console.log("MAPPED DATA:");
console.dir(lookupData, { depth: null });
 
 
    // Expired Cache -> Update
    if (cached) {
      const updated = await prisma.phoneLookup.update({
        where: {
          phoneNumber: phone,
        },
        data: {
          ...lookupData,
          lastFetched: new Date(),
        },
      });

      await prisma.searchHistory.create({
        data: {
          userId,
          phoneLookupId: updated.id,
        },
      });

      return updated;
    }

    // New Lookup
    try {
      const saved = await prisma.$transaction(async (tx) => {
        const lookup = await tx.phoneLookup.create({
          data: {
            phoneNumber: phone,
            ...lookupData,
          },
        });
 console.log("AFTER CREATE");
    console.dir(lookup,{depth:null});
        await tx.searchHistory.create({
          data: {
            userId,
            phoneLookupId: lookup.id,
          },
        });

        return lookup;
      });

      return saved;
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        const existing = await prisma.phoneLookup.findUnique({
          where: {
            phoneNumber: phone,
          },
        });

        if (!existing) {
          throw error;
        }

        await prisma.searchHistory.create({
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

export default new LookupRepository();