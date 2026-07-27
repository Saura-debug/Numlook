import { useQuery } from "@tanstack/react-query";

import historyService from "../services/history.service";

export function useHistory(page: number) {
  return useQuery({
    queryKey: ["history", page],

    queryFn: () => historyService.getHistory(page),

    placeholderData: (previousData) => previousData,
  });
}