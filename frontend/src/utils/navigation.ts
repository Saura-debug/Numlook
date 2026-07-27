import {

Home,

Search,

History,

LogOut

} from "lucide-react";

import { type NavItem } from "../types/navigation.types";

export const NAV_ITEMS:NavItem[]=[

{

title:"Dashboard",

path:"/",

icon:Home

},

{

title:"Lookup",

path:"/lookup",

icon:Search

},

{

title:"History",

path:"/history",

icon:History

}

];

export const LOGOUT_ICON=LogOut;