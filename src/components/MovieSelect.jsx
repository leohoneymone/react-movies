export default  function MovieSelect() {
    return <div className="content-block">
        <h3>Select movies</h3>
        <div className="select-block">
            <div className="select-form">
                <label htmlFor="movie-searchbar">Search for movies:</label>
                <input type="text" className="movie-searchbar" id="movie-searchbar" placeholder="e.g. Iron Man"/>
                <label htmlFor="select-type">Select type:</label>
                <select name="select-type" id="select-type" className="select-type">
                    <option value="">All</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episodes</option>
                </select>            
            </div>
            <button className="select-button">Find movies</button>
        </div>
    </div>
}