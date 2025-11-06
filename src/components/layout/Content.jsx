import { useContext } from "react"
import { moviesContext } from "../../utils/context"

import Modal from "./Modal";

export default function Content({children}){
    // Состояния
    const {modalMessage} = useContext(moviesContext);

    return <div className="content">
        {children}
        {modalMessage ? <Modal /> : null}
    </div>
}