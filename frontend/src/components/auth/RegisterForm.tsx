import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {

registerSchema,

type RegisterFormData

} from "../../schemas/register.schema";

import { useRegister } from "../../hooks/useRegister";

export default function RegisterForm(){

const {

register,

handleSubmit,

formState:{errors}

}=useForm<RegisterFormData>({

resolver:zodResolver(registerSchema)

});

const registerMutation=useRegister();

return(

<form

onSubmit={handleSubmit(

(data)=>registerMutation.mutate(data)

)}

className="space-y-4"

>

<Input

placeholder="Name"

{...register("name")}

/>

<p>{errors.name?.message}</p>

<Input

placeholder="Email"

{...register("email")}

/>

<p>{errors.email?.message}</p>

<Input

type="password"

placeholder="Password"

{...register("password")}

/>

<p>{errors.password?.message}</p>

<Button

className="w-full"

disabled={registerMutation.isPending}

>

{

registerMutation.isPending

?

"Creating account..."

:

"Register"

}

</Button>

</form>

);

}