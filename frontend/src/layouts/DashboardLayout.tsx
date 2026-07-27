import Navbar from "../components/dashboard/Navbar";

import Sidebar from "../components/dashboard/Sidebar";

import { Outlet } from "react-router-dom";

export default function DashboardLayout(){

return(

<div className="min-h-screen flex">

<Sidebar/>

<div className="flex-1 flex flex-col">

<Navbar/>

<main className="flex-1 p-6 bg-slate-100">

<Outlet/>

</main>

</div>

</div>

);

}