import { Request, Response, NextFunction } from "express";
import lookupService from "../services/lookup.service";


class LookupController {
  async lookup(req: Request, res: Response, next: NextFunction) {
    try {
      const { phone } = req.query;

      if (!phone || typeof phone !== "string") {
        return res.status(400).json({
          success: false,
          message: "Phone number is required",
        });
      }
    const userId = req.user!.userId;
    // const userId = (req as any).user.userId
      const result = await lookupService.lookup(phone,userId);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new LookupController();