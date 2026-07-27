import {
    createContext,
    useContext,
    useState,
   type ReactNode
} from "react";

import type User  from "../types/user.types";

import { storage } from "../utils/storage";

interface AuthContextType{

    user:User | null;

    token:string | null;

    login:(token:string,user:User)=>void;

    logout:()=>void;

    isAuthenticated:boolean;

}

const AuthContext=createContext<AuthContextType>(
    {} as AuthContextType
);

export function AuthProvider({
    children
}:{
    children:ReactNode
}){

    const [token,setToken]=useState(
        storage.getToken()
    );

    const [user,setUser]=useState<User | null>(
         storage.getUser()
    );

    function login(
        jwt:string,
        currentUser:User
    ){
        
        storage.setToken(jwt);

storage.setUser(currentUser);

setToken(jwt);

setUser(currentUser);
       

    }

    function logout(){

        

        setToken(null);

        setUser(null);

    }

    return(

        <AuthContext.Provider
        value={{

            token,

            user,

            login,

            logout,

            isAuthenticated:!!token

        }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export const useAuth=()=>useContext(AuthContext);