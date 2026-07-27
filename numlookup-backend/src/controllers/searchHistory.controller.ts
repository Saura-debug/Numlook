import { Request, Response, NextFunction } from "express";
import searchHistoryService from "../services/searchHistory.service";

class SearchHistoryController {
  async getHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.user!.userId;

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      const result = await searchHistoryService.getUserHistory(
        userId,
        page,
        limit
      );

      return res.status(200).json({
        success: true,
        page,
        limit,
        total: result.total,
        totalPages: Math.ceil(result.total / limit),
        data: result.history,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SearchHistoryController();