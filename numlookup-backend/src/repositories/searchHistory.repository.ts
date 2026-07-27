import prisma from "../prisma/client";

class SearchHistoryRepository {
  async getUserHistory(
    userId: string,
    page: number,
    limit: number
  ) {
    const [history, total] = await prisma.$transaction([
      prisma.searchHistory.findMany({
        where: {
          userId,
        },
        include: {
          phoneLookup: true,
        },
        orderBy: {
          searchedAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),

      prisma.searchHistory.count({
        where: {
          userId,
        },
      }),
    ]);

    return {
      history,
      total,
    };
  }
}

export default new SearchHistoryRepository();