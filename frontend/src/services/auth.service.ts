import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

import type { ApiResponse } from "../types/api.types";
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth.types";

class AuthService {
  async login(data: LoginRequest) {
    const response = await api.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.AUTH.LOGIN,
      data
    );

    return response.data.data;
  }

  async register(data: RegisterRequest) {
    const response = await api.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.AUTH.REGISTER,
      data
    );

    return response.data.data;
  }
}

export default new AuthService();