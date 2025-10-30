import { useContext } from "react";
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
function NotFoundPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon">🗿</span>
        <p>Oops... Nothing found</p>
    </div>
}

export default function MovieList() {
    // Состояния 
    const {data, setMovieData} = useContext(moviesContext);

    // Запрос к API
    const getMoviesData = async (url) => {
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
                .then(data => {
                    setMovieData(data.Search);
                })
            } else {
                alert(`HTTP ERROR ${response.status}`);
            }
        });
    }

    return <div className="content-block movie-list-block">
        
    </div>
}
