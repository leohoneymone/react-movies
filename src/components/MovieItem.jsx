import { Link } from "react-router-dom";

export default function MovieItem(props) {
    const {imdbID, Title, Year, Type, Poster} = props;

    return <div className="moive-item-tile">
        <img src={Poster} alt={Title} className="movie-poster"/>
        <div className="movie-item-info">
            <h2 className="movie-title">{Title}</h2>
            <p className="movie-year">{Year} / {Type}</p>
            <div className="movie-item-controls">
                <Link to={`/movie/${imdbID}`} className="info-btn">Detailed Info</Link>
                <button className="add-btn">+ Add to Watch List</button>
            </div>
        </div>
    </div>
}