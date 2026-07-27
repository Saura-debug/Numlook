import { type LookupResponse } from "./lookup.types";

export interface HistoryItem {
  id: string;
  searchedAt: string;
  phoneLookup: LookupResponse;
}

export interface HistoryResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: HistoryItem[];
}