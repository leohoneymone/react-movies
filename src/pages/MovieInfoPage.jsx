import { useEffect, useContext } from "react";
import { moviesContext } from "../utils/context";

import { useParams, useNavigate, useLocation} from "react-router-dom";

import { omdbApiRequest } from "../utils/api";
import { LoadingPlaceholder } from "../components/layout/Placeholders";
import noImagePlaceholder from '../utils/tile-no-image.png';

import Modal from "../components/layout/Modal";

export default function MovieInfoPage() {
    // Чтение imdbId из URL
    const movieId = useParams().id;

    // Работа с ссылками
    const navigate = useNavigate();

    // Ссылка
    const {pathname} = useLocation();

    // Состояния
    const {
        isLoading, setLoading,
        movieDetailedInfo, setMovieDetailedInfo,
        modalMessage, setModalMessage
    } = useContext(moviesContext);
 
    // Загрузка компонента
    useEffect(() => {
        setLoading(true);
        if(!movieId){
            return;
        }

        getMovieData(movieId);

        return () => {
            setMovieDetailedInfo({});
        }
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

    // Копирование в буфер обмена
    const handleClipboard = () => {
        navigator.clipboard.writeText(pathname);
        setModalMessage('URL copied to clipboard');
    }

    // Деструктуризация
    const {...data} = movieDetailedInfo;

    return <div className="content-block">
        {isLoading ? <LoadingPlaceholder /> 
        : <>{ data.imdbID ? 
                <div className="movie-info-cotainer">

                    <div className="movie-info-poster-box">
                        <img src={data.Poster} alt={data.Title} onError={e => {e.target.src = noImagePlaceholder}} className="movie-info-poster"/>
                        {data.Ratings.length ? <table className="movie-ratings">
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
                        </table> : null}
                        {data.BoxOffice !== "N/A" ? <p className="movie-box-office">Box office: {data.BoxOffice}</p> : null}
                    </div>
                    
                    <div className="movie-info-content">
                        <h1 className="movie-info-title">{data.Title}</h1>
                        <p className="movie-info-trivia">{data.Year} / <span className="trivia-type">{data.Type}</span> / {data.Genre}</p>
                        <p className="movie-info-trivia">{data.Country} / {data.Language}</p>
                        <p className="movie-info-runtime">Runtime: {data.Runtime}</p>
                        {data.Rated !== "N/A" ? <p className="pegi-rated">{data.Rated}</p> : null}

                        <table className="movie-info-creators">
                            <tbody>
                                {data.Director !== "N/A" ? <tr>
                                    <td className="td-creators-title">Director</td>
                                    <td>{data.Director}</td> 
                                </tr> : null} 
                                {data.Writer !== "N/A" ? <tr>
                                    <td className="td-creators-title">Writer</td>
                                    <td>{data.Writer}</td>
                                </tr> : null} 
                                {data.Actors !== "N/A" ? <tr>
                                    <td className="td-creators-title">Actors</td>
                                    <td>{data.Actors}</td>
                                </tr> : null} 
                            </tbody>
                        </table>
                        {data.Awards !== "N/A" ? <p className="movie-info-awards">{data.Awards}</p> : null}
                        {data.Plot !== "N/A" ? <p className="movie-info-plot">{data.Plot}</p> : null}

                        <div className="movie-info-controls">
                            <button className="share-btn" onClick={()=> {handleClipboard()}}>🔗 Share</button>
                            <button className="add-btn">+ Add to Watch List</button>
                            <button className="go-back-btn" onClick={() => {navigate(-1)}}>Go back</button>
                        </div>
                    </div>
                </div>
            : <></> 
        }</>
        }
        {modalMessage ? <Modal /> : null}
    </div>

}