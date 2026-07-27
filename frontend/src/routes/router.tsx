import {
    createBrowserRouter
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"
import Login from "@/pages/Login";
import  Register  from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import Lookup from "@/pages/Lookup";
import History from "@/pages/History"
import DashboardLayout from "@/layouts/DashboardLayout";

const router=createBrowserRouter([

{
    path:"/login",
    element:<Login/>
},

{
    path:"/register",
    element:<Register/>
},

{

element:<ProtectedRoute/>,

children:[

{

element:<DashboardLayout/>,

children:[

{

path:"/",

element:<Dashboard/>

},

{

path:"/lookup",

element:<Lookup/>

},

{

path:"/history",

element:<History/>

}

]

}

]

}

]);