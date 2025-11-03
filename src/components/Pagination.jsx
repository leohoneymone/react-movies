import { useContext } from "react";
import { moviesContext } from "../utils/context";

// Инкапсулированный компонент с кнопкой для пагинатора
function PaginationButton({page, disabled, cb = Function.prototype}){
    return <button className="pagination-button" disabled={disabled} onClick={cb}>{page}</button>
}

export default function Pagination() {
    const {page, selectPage, totalPages} = useContext(moviesContext);

    return <div className="pagination-controls">
        <button className="pagination-button left" disabled={page===1} onClick={() => {selectPage(1)} }>«</button>
        <PaginationButton page={'<'} disabled={page===1} cb={() => {selectPage(page - 1)}}/>

        {page - 4 > 0 ? <PaginationButton page={'...'} disabled={true} /> : null}
        {page - 3 > 0 ? <PaginationButton page={page - 3} disabled={false} cb={() => {selectPage(page - 3)}}/> : null}
        {page - 2 > 0 ? <PaginationButton page={page - 2} disabled={false} cb={() => {selectPage(page - 2)}}/> : null}
        {page - 1 > 0 ? <PaginationButton page={page - 1} disabled={false} cb={() => {selectPage(page - 1)}}/> : null}

        <button className="pagination-button current" disabled={true}>{page}</button>

        {totalPages - page > 1 ? <PaginationButton page={page + 1} disabled={false} cb={() => {selectPage(page + 1)}}/> : null}
        {totalPages - page > 2 ? <PaginationButton page={page + 2} disabled={false} cb={() => {selectPage(page + 2)}}/> : null}
        {totalPages - page > 3 ? <PaginationButton page={page + 3} disabled={false} cb={() => {selectPage(page + 3)}}/> : null}
        {totalPages - page > 4 ? <PaginationButton page={'...'} disabled={true} /> : null}

        <PaginationButton page={'>'} disabled={page===totalPages} cb={() => {selectPage(page + 1)}}/>
        <button className="pagination-button right" disabled={page===totalPages} onClick={() => {selectPage(totalPages)} }>»</button>
    </div>
}