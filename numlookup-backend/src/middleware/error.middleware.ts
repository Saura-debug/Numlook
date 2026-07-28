// import AppError from "../utils/AppError";
// import { NextFunction, Request, Response } from "express";

// export const errorHandler = (
//   err: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
  
//   if (err instanceof AppError) {
//     return res.status(err.statusCode).json({
//       success: false,
//       message: err.message,
//     });
//   }

//   return res.status(500).json({
//     success: false,
//     message: "Internal Server Error",
//   });
// };
import AppError from "../utils/AppError";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Print the real error in the terminal
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};