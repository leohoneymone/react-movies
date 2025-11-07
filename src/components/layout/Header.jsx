import { useContext } from "react"
import { Link } from "react-router-dom"
import { moviesContext } from "../../utils/context"

export default function Header(){
    const {movieWatchList} = useContext(moviesContext);

    const movieQuantity = movieWatchList.filter(item => !item.watched).length;

    return <div className="header">
        <div className="header-content">
            <Link to="/" className="header-title-link">Movie Catalog</Link>
            <p>Pet Project Powered by ReactJS</p>
            <nav className="header-nav">
                <Link to="/watch-list" className="watch-list-link">
                    Your Watch List
                    {movieQuantity ? <span className="watch-list-link-quantity">{movieQuantity}</span>: null}
                </Link>
                <Link to="/about">About App</Link>
            </nav>
        </div>
    </div>
}