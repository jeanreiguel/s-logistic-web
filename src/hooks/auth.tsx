import React, { createContext, useCallback, useState} from "react";
import { useContext } from "react";
import api from "../service/api";

interface Credentials {
    email: string;
    senha: string;
}

interface AuthState {
    jwt: string;
}

interface ContextData {
    signIn(credentials: Credentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<ContextData>(
    {} as ContextData
)

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("@Logistica:token");

    if(jwt) {
        return { jwt };

    }

    return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, senha }) => {
        
        const response = await api.post("authenticate", {
            email,
            senha,
        });
        const { jwt } = response.data;
        localStorage.setItem("@Logistica:token", jwt);
            setData(jwt);

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@Logistica:token");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
};

export function useAuth(): ContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used withing an AuthProvider')
    }

    return context;
}