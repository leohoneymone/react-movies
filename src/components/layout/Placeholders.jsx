// Начальный плейсхолдер 
export function InitPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon">🎬</span>
        <p>There will be movies you'll find</p>
    </div>
}

// Плейсхолдер для загрузки контента
export function LoadingPlaceholder() {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon loading-animated">💿</span>
        <p>Loading...</p>
    </div>
}

// Плейсхолдер для пустого вывода фильмов
export function NotFoundPlaceholder({name}) {
    return <div className="loading-and-placeholder-block">
        <span className="placeholder-icon">🗿</span>
        <p>Nothing found by "{name}" request</p>
    </div>
}