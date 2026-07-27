import searchHistoryRepository from "../repositories/searchHistory.repository";

class SearchHistoryService {
  async getUserHistory(
    userId: string,
    page: number,
    limit: number
  ) {
    return searchHistoryRepository.getUserHistory(
      userId,
      page,
      limit
    );
  }
}

export default new SearchHistoryService();