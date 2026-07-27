import {

NavLink

} from "react-router-dom";

import { NAV_ITEMS } from "../../utils/navigation";

export default function Sidebar(){

return(

<div className="w-64 bg-white border-r">

<div className="text-2xl font-bold p-6">

PhoneLookup

</div>

<nav>

{

NAV_ITEMS.map(item=>{

const Icon=item.icon;

return(

<NavLink

key={item.path}

to={item.path}

className="flex items-center gap-3 p-4 hover:bg-slate-100"

>

<Icon size={20}/>

{item.title}

</NavLink>

);

})

}

</nav>

</div>

);

}