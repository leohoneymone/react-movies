import { Link } from "react-router-dom";
import { useContext } from "react";
import { moviesContext } from "../utils/context";
import { omdbApiRequest } from "../utils/api";

import noImagePlaceholder from '../assets/tile-no-image.png';

export default function MovieItem(props) {
    const {imdbID, Title, Year, Type, Poster} = props;

    // Контекст
    const {movieWatchList, addMovieToWatchList, setModalMessage} = useContext(moviesContext);

    // Добавление фильма в список для просмотра (+ получение дополнительной информации о фильме через запрос)
    const handleAddToWatchList = async () => {
        if (movieWatchList.find(item => item.id === imdbID)){
            setModalMessage(`${Title} is already in Watch list`);
            return;
        }

        const apiParameters = `&i=${imdbID}&plot=full`;
        const data = await omdbApiRequest(apiParameters)
            .catch(e => {
                console.error(`Fetch API error: ${e} (${e.message})`);
            });
        const runtime = data.Runtime !== "N/A" ? +data.Runtime.slice(0,3) : 0;
        addMovieToWatchList({
            poster: data.Poster,
            title: data.Title,
            type: data.Type,
            id: data.imdbID,
            runtime: runtime
        });

        setModalMessage(`${Title} added to Watch List`);
    }

    return <div className="moive-item-tile">
        <img src={Poster} alt={Title} onError={e => {e.target.src = noImagePlaceholder}} className="movie-poster"/>
        <div className="movie-item-info">
            <h2 className="movie-title">{Title}</h2>
            <p className="movie-year">{Year} / {Type}</p>
            <div className="movie-item-controls">
                <Link to={`/movie/${imdbID}`} className="info-btn">Detailed Info</Link>
                {movieWatchList.find(item => item.id === imdbID) 
                    ? <button className="disabled-btn" disabled={true}>Already in Watch List</button>
                    : <button className="add-btn" onClick={() => {handleAddToWatchList()}}>+ Add to Watch List</button>}
            </div>
        </div>
    </div>
}