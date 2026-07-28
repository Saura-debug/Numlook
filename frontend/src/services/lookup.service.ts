import { type ApiResponse } from "@/types/api.types";
import api from "../api/axios";

import ENDPOINTS from "../api/endpoints";

import { type LookupResponse } from "../types/lookup.types";

class LookupService{

    async lookup(phone:string){

        const response=
        await api.get<ApiResponse<LookupResponse>>(
            ENDPOINTS.LOOKUP.SEARCH,
            {
                params:{
                    phone
                }
            }
        );

        return response.data;

    }

}

export default new LookupService();