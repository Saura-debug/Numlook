import { useMutation } from "@tanstack/react-query";

import { AxiosError } from "axios";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import authService from "../services/auth.service";

import { type ApiErrorResponse } from "../types/error.types";

export function useRegister() {

    const navigate = useNavigate();

    return useMutation({

        mutationFn: authService.register,

        onSuccess: () => {

            toast.success(
                "Registration successful"
            );

            navigate("/login");

        },

        onError: (
            error: AxiosError<ApiErrorResponse>
        ) => {

            toast.error(
                error.response?.data.message ??
                "Registration failed"
            );

        }

    });

}