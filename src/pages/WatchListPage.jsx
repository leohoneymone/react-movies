import { useContext } from "react";
import { moviesContext } from "../utils/context";

import { convertTime } from "../utils/api";

import WatchListItem from "../components/WatchListItem";

export default function WatchListPage(){
    // Состояния
    const {movieWatchList, summaryRuntime, summaryWatchedRuntime} = useContext(moviesContext);
    
    return <div className="content-block full-sized-block watch-list-block">
        <h2 className="watch-list-title">Your Watch List:</h2>
        <div className="watch-list-content">
            {movieWatchList.map(item => !item.watched ? <WatchListItem key={item.id} {...item}/> : null)}
            <p className="watch-list-summary">Summary movie runtime: {convertTime(summaryRuntime)}</p>
        </div>
        <h2 className="watch-list-title watch-list-completed">Already watched:</h2>
        <div className="watch-list-content">
            {movieWatchList.map(item => item.watched ? <WatchListItem key={item.id} {...item}/> : null)}
            <p className="watch-list-summary">Total time watched: {convertTime(0)}</p>
        </div>
    </div>
}