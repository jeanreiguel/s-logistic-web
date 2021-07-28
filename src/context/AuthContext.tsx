import React, { createContext, useCallback, useState } from "react";
import api from "../service/api";

interface Credentials {
    email: string;
    senha: string;
}
interface AuthState {
    jwt: string;
}
interface AuthContextData {
    signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("@Logistica:token");

        if(jwt) {
            return { jwt };
        }
        return {} as AuthState;
    },);

    const signIn = useCallback(async ({ email, senha }) => {
        const response = await api.post("authenticate", {
            email,
            senha,
        });
       
        const { jwt } = response.data;

        localStorage.setItem("@logistica:token", jwt);
        setData(jwt);
    }, []);

    return (
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    );
}