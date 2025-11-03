import loadingImg from '../../utils/spin-loading.png';
import initImg from '../../utils/init-placeholder-img.png';
import notFoundImg from '../../utils/not-found-image.png';

// Начальный плейсхолдер 
export function InitPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <img src={initImg} alt="initImg" className='placeholder-image'/>
        <p>There will be movies you'll find</p>
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