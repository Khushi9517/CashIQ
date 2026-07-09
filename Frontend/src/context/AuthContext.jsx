import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(
        sessionStorage.getItem("token") || ""
    );

    const login = (jwtToken) => {

        sessionStorage.setItem("token", jwtToken);

        setToken(jwtToken);

    };

    const logout = () => {

        sessionStorage.removeItem("token");

        setToken("");

    };

    return (

        <AuthContext.Provider
            value={{
                token,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);