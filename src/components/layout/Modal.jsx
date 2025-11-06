import { useContext, useEffect } from "react";
import { moviesContext } from "../../utils/context";

export default function Modal(){

    // Состояния
    const {modalMessage, setModalMessage} = useContext(moviesContext);

    // Работа с таймаутом
    useEffect(() => {
        const timer = setTimeout(() => {
            setModalMessage('');
        }, 2000);

        return () => {
            setTimeout(timer);
        }
    // eslint-disable-next-line
    }, []);

    return <div className="modal-window">
        <span className="modal-close" onClick={() => {setModalMessage('')}}>×</span>
        <p className="modal-text">{modalMessage}</p>
    </div>
}