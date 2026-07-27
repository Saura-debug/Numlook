import prisma from "../prisma/client";
import { RegisterUserDto } from "../dto/auth.dto";

class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(
    data:RegisterUserDto
  ) {
    return prisma.user.create({
      data
    
      
    });
  }
}

export default new AuthRepository();