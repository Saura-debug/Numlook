import bcrypt from "bcrypt";

import authRepository from "../repositories/auth.repository";

import { generateToken } from "../utils/jwt";

import AppError from "../utils/AppError";
import { RegisterUserDto } from "../dto/auth.dto";
import { LoginUserDto } from "../dto/auth.dto";

class AuthService {

  async register(data: RegisterUserDto) {
    console.log("Register API called");
    const existingUser =
      await authRepository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError(
        "User already exists",
        409
      );
    }

    const hashedPassword =
      await bcrypt.hash(data.password, 10);
      console.log("Original:", data.password);
console.log("Hashed:", hashedPassword);
    const user =
      await authRepository.createUser(
        {
   ...data,
  password: hashedPassword,
        }
      );

    const token =
      generateToken(user.id);

    return {
      user,
      token,
    };
  }
  async login(data: LoginUserDto) {

    const user =
        await authRepository.findByEmail(data.email);

    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    const isPasswordCorrect =
        await bcrypt.compare(
            data.password,
            user.password
        );

    if (!isPasswordCorrect) {
        throw new AppError("Invalid credentials", 401);
    }

    const token =
        generateToken(user.id);

    return {
        user,
        token,
    };
}
}

export default new AuthService();