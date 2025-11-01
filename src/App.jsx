// Зависимости
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Компоненты
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Context from "./utils/context";

// Страницы
import MoviesPage from "./pages/MoviesPage";

// eslint-disable-next-line
const APIKEY = process.env.REACT_APP_APIKEY;

export default function App () {
    return <div className="wrap">
        <BrowserRouter>
            <Header />
            <Context>
                <Routes>
                    <Route path="/" element={<MoviesPage />}/>
                    <Route path="/about" element={'about page'}/>
                    <Route path="*" element={'no page nigga'}/>
                </Routes>
            </Context>
            <Footer/>
        </BrowserRouter>
    </div>
}