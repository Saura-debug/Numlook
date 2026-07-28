import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("Authorization header missing", 401);
    }

    if (!authHeader.startsWith("Bearer ")) {
      throw new AppError("Invalid authorization format", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token!,
      process.env.JWT_SECRET!
    );

    // req.user = decoded as any;
    (req as any).user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};