// Стандартное начало запроса к API
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}`;

// Перевод времени из минут в часы + минуты
export const convertTime = time => {
    const hours = Math.floor(time / 60);
    const hoursRow = hours ? (hours === 1 ? `1 Hour` : `${hours} Hours`) : '';
    const minutes = time % 60;
    const minutesRow = minutes ? (minutes === 1 ? ` 1 Minute` : ` ${minutes} Minutes`) : '';
    return hoursRow + minutesRow;
}

// Запрос к OMDb API
export const omdbApiRequest = async (url) => {
    const response = await fetch(API_URL +  url);
    if (!response.ok) {
        throw new Error(`Data reception HTTP error ${response.status}`);
    }
    return response.json();
}