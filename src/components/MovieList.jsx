import { useContext, useEffect } from "react";
import { moviesContext } from "../utils/context";
import MovieItem from "./MovieItem";

import { omdbApiRequest } from "../utils/api";

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
        searchMovies(search.name, search.type);
    // eslint-disable-next-line
    }, [search]);

    // Выборка фильмов по названию + категории
    const searchMovies = async (search, type = '') => {
        const apiParameters = `&s=${search}${type ? `&type=${type}`: ''}`;
        const data = await omdbApiRequest(apiParameters)
            .catch(e => {
                console.error(`Fetch API error: ${e} (${e.message})`);
                setLoading(false);
            });
        setMovieData(data.Search || []);
        setLoading(false);
        setRequested(true);
    }

    return <div className="content-block movie-list-block">
        {isRequested 
        ? <>{data.length 
            ? <div> {data.map(item => <MovieItem key={item.imdbID} {...item} />)} </div> 
            : <NotFoundPlaceholder name={search.name}/>}</>
        : <>{isLoading ? <LoadingPlaceholder /> : <InitPlaceholder />}</>}
    </div>
}
