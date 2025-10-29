export const mainReducer = (state, {type, payload}) => {
    switch(type){

        // Открытие / закрытие панели выбора фильмов
        case "TOGGLE_SELECT_MOVIES":
            return {...state, selectorOpened: !state.selectorOpened}

        // Сохранение данных в состоянии
        case "SET_MOVIE_DATA":
            return {...state, data: payload}

        // По умолчанию
        default: return state;
    }
}