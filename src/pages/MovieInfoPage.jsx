import { useParams } from "react-router-dom"
import { useEffect } from "react";

import { omdbApiRequest } from "../utils/api";
import { LoadingPlaceholder } from "../components/layout/Placeholders";

export default function MovieInfoPage() {
    // Чтение imdbId из URL
    const movieId = useParams().id;

    useEffect(() => {
        if(!movieId){
            return;
        }

        getMovieData(movieId);
    // eslint-disable-next-line
    }, []);

    // Запрос полной информации о фильме
    const getMovieData = async (movieId) => {
        const apiParameters = `&i=${movieId}&plot=full`;
        const data = await omdbApiRequest(apiParameters)
            .catch(e => {
                console.error(`Fetch API error: ${e} (${e.message})`);
            });
        console.log(data);
    }

    return <div className="content-block full-sized-block ">
        <p>Searching for moive with ID: {movieId}</p>
        <LoadingPlaceholder />
    </div>
}