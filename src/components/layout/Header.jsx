import { useContext } from "react"
import { Link } from "react-router-dom"
import { moviesContext } from "../../utils/context"

export default function Header(){
    const {movieWatchList} = useContext(moviesContext);

    return <div className="header">
        <div className="header-content">
            <Link to="/" className="header-title-link">Movie Catalog</Link>
            <p>Pet Project Powered by ReactJS</p>
            <nav className="header-nav">
                <Link to="/watch-list" className="watch-list-link">
                    Your Watch List
                    {movieWatchList.length ? <span className="watch-list-link-quantity">{movieWatchList.length}</span>: null}
                </Link>
                <Link to="/about">About App</Link>
            </nav>
        </div>
    </div>
}