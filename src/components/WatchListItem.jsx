import { useContext } from 'react';
import { moviesContext } from '../utils/context';

import { Link } from 'react-router-dom';
import { convertTime } from '../utils/api';
import Modal from './layout/Modal';
import noImagePlaceholder from '../assets/tile-no-image.png';

export default function WatchListItem(props){
    // Пропсы
    const {poster, title, id, runtime, type, watched} = props;

    // Состояния
    const {removeFromWatchList, modalMessage, setModalMessage,} = useContext(moviesContext);

    // Удаление фильма из списка для просмотра
    const handleRemove = () => {
        removeFromWatchList(id, runtime);
        setModalMessage(`${title} removed from Watch List`);
    }

    return <div className={`wacth-list-item ${watched ? "completed" : ""}`}>
        <img src={poster} alt={title} onError={e => {e.target.src = noImagePlaceholder}} className={`watch-list-poster`}/>
        <div className={`watch-list-text ${watched ? "completed" : ""}`}>
            <h3>{title}</h3>
            <p>{type} / {convertTime(runtime)}</p>
        </div>
        <div className="watch-list-controls">
            <Link to={`/movie/${id}`} className="watch-list-info-btn">Detailed Info</Link>
            <label htmlFor={`check-watched-${id}`}>
                <input type="checkbox" name={`check-watched-${id}`} id={`check-watched-${id}`} checked={watched} className='movie-watched-checkbox'/>
                {watched ? "Unmark wacthed" : "Mark as watched"}
            </label>
            <span className="remove-btn" title='Remove movie from Watch List' onClick={() => {handleRemove()}}>❌</span>
        </div>
        {modalMessage ? <Modal /> : null}
    </div>
}

