import { useAuth } from "../../context/AuthContext";

export default function Navbar(){

const {

user

}=useAuth();

return(

<header className="bg-white border-b h-16 flex justify-end items-center px-6">

<p>

Welcome,

<strong>

{user?.name}

</strong>

</p>

</header>

);

}