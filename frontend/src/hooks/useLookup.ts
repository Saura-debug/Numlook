import { useMutation } from "@tanstack/react-query";

import lookupService from "../services/lookup.service";

export function useLookup(){

    return useMutation({

        mutationFn:lookupService.lookup

    });

}