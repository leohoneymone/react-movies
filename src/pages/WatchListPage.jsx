import { useContext } from "react";
import { moviesContext } from "../utils/context";

import { convertTime } from "../utils/api";

import WatchListItem from "../components/WatchListItem";
import { InitPlaceholder } from "../components/layout/Placeholders";

export default function WatchListPage(){
    // Состояния
    const {movieWatchList, summaryRuntime, summaryWatchedRuntime} = useContext(moviesContext);
    
    return <div className="content-block full-sized-block watch-list-block">
        {movieWatchList.length ? <><h2 className="watch-list-title">Your Watch List:</h2>
        <div className="watch-list-content">
            {movieWatchList.map(item => !item.watched ? <WatchListItem key={item.id} {...item}/> : null)}
            <p className="watch-list-summary">Summary movie runtime: {convertTime(summaryRuntime) || 'No runtime information'}</p>
        </div>
        {movieWatchList.filter(item => item.watched).length ? <>
            <h2 className="watch-list-title watch-list-completed">Already watched:</h2>
            <div className="watch-list-content">
                {movieWatchList.map(item => item.watched ? <WatchListItem key={item.id} {...item}/> : null)}
                <p className="watch-list-summary">Total time watched: {convertTime(summaryWatchedRuntime)  || 'No runtime information'}</p>
            </div>
        </> : null}
        </> : <InitPlaceholder isWatchList={true} />}
    </div>
}