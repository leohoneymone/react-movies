import { useParams } from "react-router-dom"

export default function MovieInfoPage() {
    // Чтение imdbId из URL
    const movieId = useParams().id;

    return <div className="content-block full-sized-block ">
        <p>Searching for moive with ID: {movieId}</p>
    </div>
}