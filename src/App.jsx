// Компоненты
import Footer from "./components/Footer";
import Header from "./components/layout/Header";

const APIKEY = process.env.REACT_APP_APIKEY;

export default function App () {
    return <div className="wrap">
        <Header />
        <div className="content">
            Content will be here
        </div>
        <Footer/>
    </div>
}