import { createContext } from "react";

// Контекст
export const moviesContext =  createContext();

// Начальные значения 
const movieCatalogInitValue = {
    message: 'Hello niga'
}

// Обёртка для контекста
export default function Context ({children}){

    const appValue = movieCatalogInitValue;

    return <moviesContext.Provider value={appValue}>{children}</moviesContext.Provider> 
}