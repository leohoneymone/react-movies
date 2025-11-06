import avatar from '../assets/avatar.jpg';

export default function AboutPage() {
    return <div className="content-block full-sized-block about-block">
        <h1 title='about-title'>About Movie Catalog</h1>
        <nav className="about-navigation">
            <a href="#Description">Description</a>
            <a href="#Author">Author</a>
            <a href="#References">References</a>
        </nav>
        {/* Описание приложения */}
        <h2 id="Description">Description</h2>
        <p>Movie catalog is a <span>Singe-Page Application (SPA)</span> powered by ReactJS frontend framework. 
        Multiple tabs and complex URL handling are implemented using routing.</p>
        <p>Using this application you can: </p>
        <ul>
            <li>Search movies by both their name and type (full-length movie, series, episodes)</li>
            <li>Get detailed information about selected movie - from brief description of movie to full cast </li>
            <li>Add movies to watch list - your own catalog of movies you are willing to watch</li>
            <li>Control watch list - add movies, remove them, mark them as watched and collect statistics</li>
            <li>Share movies or search result with your friends using only web URLs</li>
        </ul>
        <p>This application is based on <span>OMDb</span> film database and API. 
        For watch list storing as well as some miscellaneous data <span>localStorage</span> is used.
        It is also using <span>react-router-dom</span> for rounting and <span>gh-pages</span> for deploying as main dependencies.</p>
        {/* Информация о авторе */}
        <h2 id="Author">Author</h2>
        <div className="about-author">
            <div className="name-and-image">
                <img src={avatar} alt="author-img" className='author-image'/>
                <h4 className='author-name'>Leonard Honeymone</h4>
                <p className='author-name-tag'>@cozamaleonard</p>
                <p className='author-trivia'>24 y.o. / Frontend Developer</p>
            </div>
            <div className="author-description">
                <div className="citation-box">
                    <span className="citation">
                        This is my first React pet project. I made a huge effort to put all of my knowledge about components, hooks and their interactions. 
                        I am not using state here just for showcasing my abilities to create logic using context + reducer as well as custom hooks espessially for localStorage management.
                        I tried to put as many functions as I can to create really impressive SPA and I think I have maxxed out API's possibilities. :)
                    </span>
                </div>
                <p className='author-socials'>Socials: <a href="https://github.com/leohoneymone" target='_blank' rel='noreferrer'>GitHub</a></p>
            </div>
        </div>
        {/* Ссылки на источники */}
        <h2 id="References">References</h2>
        <ul className='reference-list'>
            <li><a href="https://github.com/leohoneymone" target='_blank' rel='noreferrer'>GitHub</a></li>
            <li><a href="https://github.com/leohoneymone/react-movies" target='_blank' rel='noreferrer'>Repository</a></li>
            <li><a href="https://www.omdbapi.com" target='_blank' rel='noreferrer'>OMDb API</a></li>
        </ul>
    </div>
}