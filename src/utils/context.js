import { createContext, useReducer } from "react";
import { mainReducer } from "./reducer";

// Контекст
export const moviesContext =  createContext();

// Начальные значения 
const movieCatalogInitValue = {
    selectorOpened: true,
    isLoading: false,
    isRequested: false,

    data: [],
    search: {},
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

    appValue.setLoading = (value) => {
        dispatcher({type: "SET_LOADING", payload: value});
    }

    appValue.setRequested = (value) => {
        dispatcher({type: "SET_REQUESTED", payload: value});
    }
    
    appValue.setSearch = data => {
        dispatcher({type: "SET_SEARCH_DATA", payload: data});
    }

    return <moviesContext.Provider value={appValue}>{children}</moviesContext.Provider> 
}