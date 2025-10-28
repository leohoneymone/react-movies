// Компоненты
import Footer from "./components/Footer";
import Header from "./components/layout/Header";

const APIKEY = process.env.REACT_APP_APIKEY;

export default function App () {
    return <div className="wrap">
        <Header />
        <div className="content">
            Content will be here <br /><br />
            TODO:
            <br />
            <ul style={{'padding-left': '2rem'}}>
                <li>Data reception via API</li>
                <li>Data parsing using context + reducer</li>
                <li>Selection menu (genre, year, name, etc.)</li>
                <li>Watch later section for saving movies</li>
                <li>Saving Watch later movies list</li>
                <li>Marking wathced movies and calculating them</li>
                <li>Adding movies to Watch later list</li>
                <li>pagination</li>
                <li>Year sorting (???)</li>
                <li>Full movie information using Pop-up window</li>
                <li>Control buttons for Watch later list (remove, unmark, etc.)</li>
                <li>Displaying unwatched movies quantity</li>
                <li>Mobile version adaptation</li>
            </ul>
            <br />
            MAIN TENDENCIES:
            <br />
            <ul style={{'padding-left': '2rem'}}>
                <li>Using context + reducer as main logic</li>
                <li>Using localStorage and custom hook for saving data</li>
                <li>Using routing to create SPA for search results</li>
            </ul>
        </div>
        <Footer/>
    </div>
}