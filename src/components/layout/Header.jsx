import { Link } from "react-router-dom"

export default function Header(){
    return <div className="header">
        <div className="header-content">
            <Link to="/" className="header-title-link">Movie Catalog</Link>
            <p>Pet Project Powered by ReactJS</p>
            <nav className="header-nav">
                <Link to="/watch-list">Your Watch List</Link>
                <Link to="/about">About App</Link>
            </nav>
        </div>
    </div>
}