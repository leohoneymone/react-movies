export default function Header(){
    return <div className="header">
        <div className="header-content">
            <h1>Movie Catalog</h1>
            <p>Pet Project Powered by ReactJS</p>
            <nav className="header-nav">
                <a href="https://github.com/leohoneymone" target="_blank" rel="noreferrer">Author</a>
                <a href="#!" target="_blank" rel="noreferrer">Repo</a>
                <a href="https://www.omdbapi.com" target="_blank" rel="noreferrer">API</a>
            </nav>
        </div>
    </div>
}