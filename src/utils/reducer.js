export const mainReducer = (state, {type, payload}) => {
    switch(type){

        // Открытие / закрытие панели выбора фильмов
        case "TOGGLE_SELECT_MOVIES":
            return {...state, selectorOpened: !state.selectorOpened}

        // По умолчанию
        default: return state;
    }
}