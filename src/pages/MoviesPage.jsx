import MovieSelect from "../components/MovieSelect";
import MovieList from "../components/MovieList";
import Modal from "../components/layout/Modal";

import { useContext } from "react";
import { moviesContext } from "../utils/context";

export default function MoviesPage() {
    const {modalMessage} = useContext(moviesContext);

    return <>
        <MovieSelect />
        <MovieList />
    </>
}