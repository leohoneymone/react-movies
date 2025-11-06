// Зависимости
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Компоненты
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Context from "./utils/context";
import Content from "./components/layout/Content";

// Страницы
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import MovieInfoPage from "./pages/MovieInfoPage";
import WatchListPage from "./pages/WatchListPage";

// eslint-disable-next-line
const APIKEY = process.env.REACT_APP_APIKEY;

export default function App () {
    return <div className="wrap">
        <BrowserRouter>
            <Header />
            <Context>
                <Content>
                    <Routes>
                        <Route path="/" element={<MoviesPage />}/>
                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="/movie/:id" element={<MovieInfoPage />}/>
                        <Route path="/watch-list" element={<WatchListPage />}/>
                        <Route path="*" element={<NotFoundPage />}/>
                    </Routes>
                    </Content>
            </Context>
            <Footer/>
        </BrowserRouter>
    </div>
}