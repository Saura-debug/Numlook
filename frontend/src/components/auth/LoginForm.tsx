import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

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
         <div className="space-y-2">
    <label
        htmlFor="email"
        className="text-sm font-medium"
    >
        Email
    </label>

    <Input 
    autoComplete="email"
        id="email"
        placeholder="Enter your email"
        {...register("email")}
    />

    {errors.email && (
        <p className="text-sm text-red-500">
            {errors.email.message}
        </p>
    )}
</div>
        
              <div className="space-y-2">
    <label
        htmlFor="password"
        className="text-sm font-medium"
    >
        Password
    </label>

    <Input 
    autoComplete="current-password"
        id="password"
        placeholder="Enter your password"
        {...register("password")}
    />

    {errors.password && (
        <p className="text-sm text-red-500">
            {errors.email.message}
        </p>
    )}
</div>

           

            <Button
            className="w-full"
            disabled={loginMutation.isPending}
            type="submit"
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