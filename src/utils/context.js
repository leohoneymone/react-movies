import { createContext, useReducer } from "react";
import { mainReducer } from "./reducer";

// Контекст
export const moviesContext =  createContext();

// Начальные значения 
const movieCatalogInitValue = {
    selectorOpened: true,
}

// Обёртка для контекста
export default function Context ({children}){

    // Состояния приложения, созданные через редьюсер
    const [appValue, dispatcher] = useReducer(mainReducer, movieCatalogInitValue);

    // Функции, созданные через редьюсер
    appValue.toggleSelectMovies = () => {
        dispatcher({type: "TOGGLE_SELECT_MOVIES"});
    }

    return <moviesContext.Provider value={appValue}>{children}</moviesContext.Provider> 
}