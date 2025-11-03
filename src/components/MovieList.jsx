import { useContext, useEffect } from "react";
import { moviesContext } from "../utils/context";
import MovieItem from "./MovieItem";

import { omdbApiRequest } from "../utils/api";

import { InitPlaceholder, NotFoundPlaceholder, LoadingPlaceholder } from "./layout/Placeholders";
import Pagination from "./Pagination";

export default function MovieList() {
    // Состояния 
    const {data, setMovieData,
        isRequested, setRequested,
        isLoading, setLoading,
        search, page, selectPage,
        setTotalPages, setTotalResults
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
            ? <><Pagination />
                <div className="movie-list-container"> {data.map(item => <MovieItem key={item.imdbID} {...item} />)} </div>
                {/* <Pagination />  */}
            </>
            : <NotFoundPlaceholder name={search.name}/>}</>
        : <>{isLoading ? <LoadingPlaceholder /> : <InitPlaceholder />}</>}
    </div>
}
