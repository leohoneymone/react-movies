export const mainReducer = (state, {type, payload}) => {
    switch(type){

        // Сохранение данных в состоянии
        case "SET_MOVIE_DATA":
            return {...state, data: payload}

        // Установка флажка загрузки данных
        case "SET_LOADING":
            return {...state, isLoading: payload} 

        // Установка флажка завершения запроса данных
        case "SET_REQUESTED":
            return {...state, isRequested: payload} 

        // Работа с параметрами поиска
        case "SET_SEARCH_DATA":
            return {...state, search: payload}

        // Установка количества страниц
        case "SET_TOTAL_RESULTS":
            return {...state, totalResults: payload}

        // Установка количества страниц
        case "SET_TOTAL_PAGES":
            return {...state, totalPages: payload}
        
        // Выбор страницы
        case "SELECT_PAGE":
            return {...state, page: payload}
        
        // Очистка состояния, связанного с данными
        case "CLEAR_DATA":
            return {...state, 
                isRequested: false,
                search: {},
                isLoading: false,
                data: [],
                page: 1,
                totalPages: 0,
                totalResults: 0
            }

        // Получение подробных данных о конкретном фильме
        case "SET_MOVIE_DETAILED_INFO":
            return {...state, movieDetailedInfo: payload}

        // Работа с модальным окноп
        case "SET_MODAL_MESSAGE":
            return {...state, modalMessage: payload}

        // Добавление фильма в список для просмотра
        case "ADD_TO_WATCH_LIST":            
            return {...state,
                movieWatchList: [...state.movieWatchList, {
                    poster: payload.poster,
                    title: payload.title,
                    type: payload.type,
                    id: payload.id,
                    runtime: payload.runtime,
                    watched: false
                }],
            }
        
        // Удаление фильма из списка для просмотра
        case "REMOVE_FROM_WATCH_LIST":
            return{...state, movieWatchList: [...state.movieWatchList.filter(item => item.id !== payload)]}

        // Установка фильма как просмотренного
        case "SET_WATCHED":
            return{...state, movieWatchList: state.movieWatchList.map(item => item.id === payload ? {...item, watched: true} : item)}

        // Удаление фильма из просмотренного
        case "UNSET_WATCHED":
            return{...state, movieWatchList: state.movieWatchList.map(item => item.id === payload ? {...item, watched: false} : item)}

        // Расчёт суммарного времени просмотра фильмов и уже просмотренных фильмов в списке пользователя  
        case "CALCULATE_RUNTIME":
            return {...state,
                summaryRuntime: state.movieWatchList.length ? state.movieWatchList.reduce((sum, val) => val.watched ? sum : sum + val.runtime, 0) : 0,
                summaryWatchedRuntime: state.movieWatchList.length ? state.movieWatchList.reduce((sum, val) => val.watched ? sum + val.runtime : sum, 0) : 0
            }

        // По умолчанию
        default: return state;
    }
}