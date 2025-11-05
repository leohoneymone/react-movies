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
                summaryRuntime: state.summaryRuntime + payload.runtime
            }
            
        // По умолчанию
        default: return state;
    }
}