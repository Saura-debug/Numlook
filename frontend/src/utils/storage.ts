import type User from "../types/user.types";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export const storage = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  },

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  },

  getUser(): User | null {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  },

  setUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  removeUser(): void {
    localStorage.removeItem(USER_KEY);
  },

  clear(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};