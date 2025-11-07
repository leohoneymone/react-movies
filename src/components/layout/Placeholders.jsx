import loadingImg from '../../assets/spin-loading.png';
import initImg from '../../assets/init-placeholder-img.png';
import notFoundImg from '../../assets/not-found-image.png';
import allWatchedImg from '../../assets/all-watched-image.png'

// Начальный плейсхолдер 
export function InitPlaceholder({isWatchList = false}) {
    return <div className="loading-and-placeholder-block">
        <img src={initImg} alt="initImg" className='placeholder-image'/>
        <p>{isWatchList ? "Nothing here yet. Add movies to the list" : "There will be movies you'll find"}</p>
    </div>
}

// Плейсхолдер для загрузки контента
export function LoadingPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <img src={loadingImg} alt="loadingImg" className='placeholder-image loading-animated'/>
        <p>Loading...</p>
    </div>
}

// Плейсхолдер для пустого вывода фильмов
export function NotFoundPlaceholder({name}) {
    return <div className="loading-and-placeholder-block">
        <img src={notFoundImg} alt="notFoundImg" className='placeholder-image'/>
        <p>Nothing found by "{name}" request</p>
    </div>
}


// Плейсхолдер для пустого фрагмента списка фильма для просмотра
export function AllWatchedPlaceholder() {
    return <div className="loading-and-placeholder-block all-wathced-list">
        <img src={allWatchedImg} alt="allWatchedImg" className='placeholder-image'/>
        <p>You've watched everything from your list. Add new movies to it</p>
    </div>
}
