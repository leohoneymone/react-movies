import { createContext, useReducer } from "react";
import { mainReducer } from "./reducer";

// Контекст
export const moviesContext =  createContext();

// По 10 записей на страницу (ограничение API)
export const TILES_PER_PAGE = 10;

// Начальные значения 
const movieCatalogInitValue = {
    // Общий контекст для работы с данными
    modalMessage: '',
    isLoading: false,
    isRequested: false,

    // Список фильмов
    data: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
    search: {},

    // Список фильмов для просмотра
    movieWatchList: [],
    summaryRuntime: 0,
    summaryWatchedRuntime: 0,

    // Подробная информация о фильме
    movieDetailedInfo: {}
}

// Обёртка для контекста
export default function Context ({children}){

    // Инициализация редьюсера
    const [appValue, dispatcher] = useReducer(mainReducer, movieCatalogInitValue);

    // Добавление функций для работы с состояниями в редьюсер
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

    appValue.setTotalResults = data => {
        dispatcher({type: 'SET_TOTAL_RESULTS', payload: data});
    }

    appValue.setTotalPages = data => {
        dispatcher({type: 'SET_TOTAL_PAGES', payload: data});
    }

    appValue.selectPage = data =>{
        dispatcher({type: 'SELECT_PAGE', payload: data});
    }

    appValue.clearData = () => {
        dispatcher({type: 'CLEAR_DATA'});
    }

    appValue.setMovieDetailedInfo = data => {
        dispatcher({type: "SET_MOVIE_DETAILED_INFO", payload: data});
    }

    appValue.setModalMessage = text => {
        dispatcher({type: "SET_MODAL_MESSAGE", payload: text});
    }

    appValue.addMovieToWatchList = data => {
        dispatcher({type: "ADD_TO_WATCH_LIST", payload: data});
    }

    appValue.removeFromWatchList = (id, runtime) => {
        dispatcher({type: "REMOVE_FROM_WATCH_LIST", payload: [id, runtime]});
    }

    return <moviesContext.Provider value={appValue}>{children}</moviesContext.Provider> 
}