import React, { createContext, useCallback } from "react";
import api from '../service/api'

interface Credentials {
    email: string,
    senha: string;
}

interface AuthData {
    user: string,
    signIn(credentials: Credentials): Promise<void>,
}

export const AuthContext = createContext<AuthData>(
    {} as AuthData
);

export const AuthProvider: React.FC = ({ children }) => {

    const signIn = useCallback( async ({ email, senha }) => {
        const response = await api.post("authenticate", {
            email,
            senha,
        });

        console.log(response.data)
    }, []);

    return (
        <AuthContext.Provider value={{user: "Jean", signIn}}>
            { children }
        </AuthContext.Provider>
    );
}