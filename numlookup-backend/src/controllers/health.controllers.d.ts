import { Request, Response, NextFunction } from "express";
declare class healthcontroller {
    healthcheck(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: healthcontroller;
export default _default;
//# sourceMappingURL=health.controllers.d.ts.map