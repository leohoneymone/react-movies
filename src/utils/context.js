import { createContext, useReducer } from "react";
import { mainReducer } from "./reducer";

// Контекст
export const moviesContext =  createContext();

// Начальные значения 
const movieCatalogInitValue = {
    selectorOpened: true,
    data: [],
}

// Обёртка для контекста
export default function Context ({children}){

    // Инициализация редьюсера
    const [appValue, dispatcher] = useReducer(mainReducer, movieCatalogInitValue);

    // Добавление функций для работы с состояниями в редьюсер
    appValue.toggleSelectMovies = () => {
        dispatcher({type: "TOGGLE_SELECT_MOVIES"});
    }

    appValue.setMovieData = data => {
        dispatcher({type: "SET_MOVIE_DATA", payload: data});
    }

    return <moviesContext.Provider value={appValue}>{children}</moviesContext.Provider> 
}