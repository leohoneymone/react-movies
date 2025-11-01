// Стандартное начало запроса к API
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}`

// Запрос к OMDb API
export const omdbApiRequest = async (url) => {
    const response = await fetch(API_URL +  url);
    if (!response.ok) {
        throw new Error(`Data reception HTTP error ${response.status}`);
    }
    return response.json();
}