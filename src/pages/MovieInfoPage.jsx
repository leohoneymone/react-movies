import { useEffect, useContext } from "react";
import { moviesContext } from "../utils/context";

import { useParams, useNavigate } from "react-router-dom";

import { omdbApiRequest } from "../utils/api";
import { LoadingPlaceholder } from "../components/layout/Placeholders";
import noImagePlaceholder from '../utils/tile-no-image.png';

export default function MovieInfoPage() {
    // Чтение imdbId из URL
    const movieId = useParams().id;

    // Работа с ссылками
    const navigate = useNavigate();

    // Состояния
    const {
        isLoading, setLoading,
        movieDetailedInfo, setMovieDetailedInfo
    } = useContext(moviesContext);
 
    // Загрузка компонента
    useEffect(() => {
        setLoading(true);
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
        setMovieDetailedInfo(data);
        setLoading(false);
    }

    // Деструктуризация
    const {...data} = movieDetailedInfo;

    return <div className="content-block">
        {isLoading ? <LoadingPlaceholder /> 
        : <>{ data.imdbID ? 
                <div className="movie-info-cotainer">

                    <div className="movie-info-poster-box">
                        <img src={data.Poster} alt={data.Title} onError={e => {e.target.src = noImagePlaceholder}} className="movie-info-poster"/>
                        <table className="movie-ratings">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Ratings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...data.Ratings].reverse().map(item => 
                                    <tr key={item.Source}>
                                        <td>{item.Source}</td>
                                        <td>{item.Value}</td>
                                    </tr>
                                )}
                                <tr key="imdbVotes" className="imdb-votes-row">
                                    <td>IMDb Votes</td>
                                    <td>{data.imdbVotes}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="movie-box-office">Box office: {data.BoxOffice}</p>
                    </div>
                    
                    <div className="movie-info-content">
                        <h1 className="movie-info-title">{data.Title}</h1>
                        <p className="movie-info-trivia">{data.Year} / <span className="trivia-type">{data.Type}</span> / {data.Genre}</p>
                        <p className="movie-info-trivia">{data.Country} / {data.Language}</p>
                        <p className="movie-info-runtime">Runtime: {data.Runtime}</p>
                        <p className="pegi-rated">{data.Rated}</p>

                        <table className="movie-info-creators">
                            <tr>
                                <td className="td-creators-title">Director</td>
                                <td>{data.Director}</td>
                            </tr>
                            <tr>
                                <td className="td-creators-title">Writer</td>
                                <td>{data.Writer}</td>
                            </tr>
                            <tr>
                                <td className="td-creators-title">Actors</td>
                                <td>{data.Actors}</td>
                            </tr>
                        </table>
                        <p className="movie-info-awards">{data.Awards}</p>
                        <p className="movie-info-plot">{data.Plot}</p>

                        <div className="movie-info-controls">
                            <button className="add-btn">+ Add to Watch List</button>
                            <button className="go-back-btn" onClick={() => {navigate(-1)}}>Go back</button>
                        </div>
                    </div>
                </div>
            : <></> 
        }</>
        }
    </div>

}