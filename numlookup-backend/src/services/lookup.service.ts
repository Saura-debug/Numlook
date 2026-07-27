// services/lookup.service.ts

import lookupRepository from "../repositories/lookup.repository";
import AppError from "../utils/AppError";
import {
  normalizePhoneNumber,
  isValidPhoneNumber,
} from "../utils/phone";

class LookupService {
  async lookup(phone: string,userId:string) {
     phone = normalizePhoneNumber(phone);

    if(!isValidPhoneNumber(phone)){
        throw new AppError(
            "Invalid phone number",
            400
        );
    }

    return await lookupRepository.lookup(phone,
        userId
      );
  }
}

export default new LookupService();