import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import authService from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { AxiosError } from "axios";

import {type ApiErrorResponse } from "../types/error.types";

export function useLogin() {
  const navigate = useNavigate();

  const { login } = useAuth();

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (response) => {
      login(response.token, response.user);

      toast.success("Logged in successfully");

      navigate("/");
    },

   onError: (error: AxiosError<ApiErrorResponse>) => {
    toast.error(
        error.response?.data.message ??
        "Unable to login"
    );
},
  });
}