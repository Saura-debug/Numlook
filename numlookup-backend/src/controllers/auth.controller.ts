import { Request, Response, NextFunction } from "express";

import authService from "../services/auth.service";
import { RegisterUserDto } from "../dto/auth.dto";
import { registerSchema,loginSchema } from "../validation/auth.validator";

class AuthController {
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const registerData: RegisterUserDto = registerSchema.parse(req.body);

      const result =await authService.register(registerData);

      return res.status(201).json({
        success: true,
        message:"User has been Registered Successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  async login(
    req: Request,
    res: Response,
    next: NextFunction
){
    try{

        const loginData =
            loginSchema.parse(req.body);

        const result =
            await authService.login(loginData);

        return res.status(200).json({
            success:true,
            message:"Login Successfully",
            data:result
        });

    }catch(error){
        next(error);
    }
}
}

export default new AuthController();