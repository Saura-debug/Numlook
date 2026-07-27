import { Request, Response, NextFunction } from "express";
declare class LookupController {
    lookup(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: LookupController;
export default _default;
//# sourceMappingURL=lookup.controller.d.ts.map