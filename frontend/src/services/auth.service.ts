import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

import {
 type LoginRequest,
 type RegisterRequest,
  type AuthResponse,
} from "../types/auth.types";

class AuthService {
  async login(data: LoginRequest) {
    const response =
      await api.post<AuthResponse>(
        ENDPOINTS.AUTH.LOGIN,
        data
      );

    return response.data;
  }

  async register(data: RegisterRequest) {
    const response =
      await api.post<AuthResponse>(
        ENDPOINTS.AUTH.REGISTER,
        data
      );

    return response.data;
  }
}

export default new AuthService();