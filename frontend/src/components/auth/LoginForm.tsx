import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../@/components/ui/button";

import { Input } from "../../../@/components/ui/input";

import {
    loginSchema,
   type LoginFormData
} from "../../schemas/login.schema";

import { useLogin } from "../../hooks/useLogin";

export default function LoginForm(){

    const {

        register,

        handleSubmit,

        formState:{errors}

    }=useForm<LoginFormData>({

        resolver:zodResolver(loginSchema)

    });

    const loginMutation=useLogin();

    return(

        <form
        onSubmit={handleSubmit(
            (data)=>loginMutation.mutate(data)
        )}
        className="space-y-4"
        >

            <Input

            placeholder="Email"

            {...register("email")}

            />

            <p className="text-red-500 text-sm">

                {errors.email?.message}

            </p>

            <Input

            type="password"

            placeholder="Password"

            {...register("password")}

            />

            <p className="text-red-500 text-sm">

                {errors.password?.message}

            </p>

            <Button
            className="w-full"
            disabled={loginMutation.isPending}
            >

                {

                    loginMutation.isPending

                    ?

                    "Logging in..."

                    :

                    "Login"

                }

            </Button>

        </form>

    );

}