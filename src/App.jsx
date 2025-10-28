// Компоненты
import MoviesContent from "./components/MoviesContent";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Context from "./utils/context";

// eslint-disable-next-line
const APIKEY = process.env.REACT_APP_APIKEY;

export default function App () {
    return <div className="wrap">
        <Header />
        <Context>
            <MoviesContent />
        </Context>
        <Footer/>
    </div>
}