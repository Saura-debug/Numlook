
import { Request, Response, NextFunction } from "express";
class healthcontroller{
    async healthcheck(
            req: Request,
    res: Response,
    next: NextFunction
    ){
         res.status(200).json({
    success: true,
    status: "OK",
    timestamp: new Date().toISOString(),
  });

    }

}
 export default new healthcontroller();