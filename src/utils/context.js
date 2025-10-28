import { createContext } from "react";

export const moviesContext =  createContext();

export default function Context ({children}){

    const appValue = {
        message: "Hello my dear Nigger & Faggot!"
    }

    return <moviesContext.Provider value={appValue}>{children}</moviesContext.Provider> 
}