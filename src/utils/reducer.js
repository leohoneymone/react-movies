export const mainReducer = (state, {type, payload}) => {
    switch(type){

        // Открытие / закрытие панели выбора фильмов
        case "TOGGLE_SELECT_MOVIES":
            return {...state, selectorOpened: !state.selectorOpened}

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

        // По умолчанию
        default: return state;
    }
}