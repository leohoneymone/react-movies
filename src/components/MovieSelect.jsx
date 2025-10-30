import { useContext, useRef } from "react";
import { moviesContext } from "../utils/context";

export default  function MovieSelect() {
    // Cостояния
    const {toggleSelectMovies, selectorOpened, setSearch} = useContext(moviesContext);

    // Рефы для работы с полями ввода
    const searchBarRef = useRef(null);
    const selectTypeRef = useRef(null);

    // Сохранение параметров поиска в состояние
    const setParameters = () => {
        if(!searchBarRef.current || !selectTypeRef.current){
            return;
        }

        setSearch({
            name: searchBarRef.current.value.trim(), 
            type: selectTypeRef.current.value
        });
    }

    return <div className="content-block select-content-block">
        <h3>Select movies</h3>
        <button className="toggle-select-btn" onClick={() => {toggleSelectMovies()}}>{selectorOpened ? '▲' : '▼'}</button>
        {selectorOpened ? <div className="select-block">
            <div className="select-form">
                <label htmlFor="movie-searchbar">Search for movies:</label>
                <input type="text" className="movie-searchbar" id="movie-searchbar" placeholder="e.g. Iron Man" ref={searchBarRef}/>
                <label htmlFor="select-type">Select type:</label>
                <select name="select-type" id="select-type" className="select-type" ref={selectTypeRef}>
                    <option value="">All</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episodes</option>
                </select>            
            </div>
            <button className="select-button" onClick={()=>{setParameters()}}>Find movies</button>
        </div> : <></>}
    </div>
}