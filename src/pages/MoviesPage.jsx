import MovieSelect from "../components/MovieSelect";
import MovieList from "../components/MovieList";

export default function MoviesPage() {

    return <div className="content">
        <MovieSelect />
        <MovieList />
    </div>
}