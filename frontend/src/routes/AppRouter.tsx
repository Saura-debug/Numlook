import { Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
 import Lookup from "@/pages/Lookup";
//  import History from "@/pages/History";
 import Dashboard from "@/pages/Dashboard";


export default function AppRouter() {
  return (
    <Routes>
      // Unprotected Route
      
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register/>} />

         
           {/* <Route path="/history" element={<History />} /> */}


 {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/lookup" element={<Lookup />}/>
            <Route path="/" element={<Dashboard />}/>
         
        </Route>
      </Route>




      
      
        

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}