import { useContext, useEffect } from "react";
import { moviesContext } from "../utils/context";

const APIKEY = process.env.REACT_APP_APIKEY;

// Начальный плейсхолдер 
function InitPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon">🎬</span>
        <p>There will be movies you'll find</p>
    </div>
}

// Плейсхолдер для загрузки контента
function LoadingPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon loading-animated">💿</span>
        <p>Loading...</p>
    </div>
}

// Плейсхолдер для пустого вывода фильмов
function NotFoundPlaceholder({name}) {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon">🗿</span>
        <p>Nothing found by "{name}" request</p>
    </div>
}

export default function MovieList() {
    // Состояния 
    const {data, setMovieData,
        isRequested, setRequested,
        isLoading, setLoading,
        search
    } = useContext(moviesContext);

    // Запрос к данным 
    useEffect(() => {
        if(!search.name) {return;}

        setRequested(false);
        setLoading(true);
        const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${search.name}${search.type ? `&type=${search.type}`: ''}`;
        getMoviesData(url);
    // eslint-disable-next-line
    }, [search]);

    // Запрос к API
    const getMoviesData = async (url) => {
        fetch(url)
        .then(response => {
            // Обработка ошибок HTTP
            if (!response.ok) {
                throw new Error(`Data reception HTTP error ${response.status}`);
            }
            return response.json();
        })
        // Обновление состояний
        .then(data => {
            setMovieData(data.Search || []);
            setLoading(false);
            setRequested(true);
            console.log('tf nigga');
        })
        .catch(e => {
            console.error(`Fetch API error: ${e} (${e.message})`);
            setLoading(false);
        })
                
            
    }

    return <div className="content-block movie-list-block">
        {isRequested 
        ? <>{data.length ? <p>{data.toString()}</p> : <NotFoundPlaceholder name={search.name}/>}</>
        : <>{isLoading ? <LoadingPlaceholder /> : <InitPlaceholder />}</>}
    </div>
}
