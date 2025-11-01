export default function MovieItem(props) {
    const {imdbID, Title, Year, Type, Poster} = props;

    return <div style={{background: 'grey', marginBottom: '1rem'}}>
        <h2>{Title} ({Year})</h2>
        <p>{Type}</p>
    </div>
}