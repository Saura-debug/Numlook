import { Request, Response, NextFunction } from "express";
declare class SearchHistoryController {
    getHistory(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: SearchHistoryController;
export default _default;
//# sourceMappingURL=searchHistory.controller.d.ts.map