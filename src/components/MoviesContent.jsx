import MovieSelect from "./MovieSelect";
import MovieList from "./MovieList";

export default function MoviesContent() {

    return <div className="content">
        <MovieSelect />
        <MovieList />
    </div>
}