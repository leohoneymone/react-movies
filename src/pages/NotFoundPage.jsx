import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return <div className="content-block page-not-found-block">
        <span>404</span>
        <p>The requested page does not exist</p>
        <Link to="/">Return to main page</Link>
    </div>
}