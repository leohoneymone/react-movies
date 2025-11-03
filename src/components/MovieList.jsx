import { useContext, useEffect } from "react";
import { moviesContext } from "../utils/context";
import MovieItem from "./MovieItem";

import { omdbApiRequest } from "../utils/api";

import { InitPlaceholder, NotFoundPlaceholder, LoadingPlaceholder } from "./layout/Placeholders";
import Pagination from "./Pagination";

export default function MovieList() {
    // Состояния 
    const {data, setMovieData, clearData,
        isRequested, setRequested,
        isLoading, setLoading,
        search, page, selectPage, 
        totalResults, setTotalResults, setTotalPages
    } = useContext(moviesContext);

    // Запрос к данным при поиске новой информации
    useEffect(() => {
        if(!search.name) {return;}

        selectPage(1);
        setLoading(true);
        searchMovies(search.name, search.type, page);
    // eslint-disable-next-line
    }, [search]);

    // Запрос к данным при использованиии пагинации
    useEffect(() => {
        if(!search.name || !isRequested) {return;}

        setLoading(true);
        searchMovies(search.name, search.type, page);
    // eslint-disable-next-line
    }, [page]);

    // Выборка фильмов по названию + категории
    const searchMovies = async (search, type = '', page) => {
        const apiParameters = `&s=${search}&page=${page}${type ? `&type=${type}`: ''}`;
        const data = await omdbApiRequest(apiParameters)
            .catch(e => {
                console.error(`Fetch API error: ${e} (${e.message})`);
                setLoading(false);
            });
        setMovieData(data.Search || []);
        setLoading(false);
        setTotalResults(+data.totalResults);
        setTotalPages(Math.ceil(+data.totalResults / 10));
        setRequested(true);
    }

    return <div className="content-block movie-list-block">
        {isRequested 
        ? <>{data.length 
            ? <><div className="movie-list-controls">
                    <p className="movie-total-results">Found {totalResults} items</p>
                    <Pagination />
                </div>
                {!isLoading ? <div className="movie-list-container"> {data.map(item => <MovieItem key={item.imdbID} {...item} />)} </div> : <LoadingPlaceholder />}
                <div className="movie-list-controls">
                    <button className="movie-list-clear-btn" onClick={() => {clearData()}}>🗑️ Clear</button>
                    <Pagination />
                </div>
            </>
            : <NotFoundPlaceholder name={search.name}/>}</>
        : <>{isLoading ? <LoadingPlaceholder /> : <InitPlaceholder />}</>}
    </div>
}
