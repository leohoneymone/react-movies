import { useContext, useEffect } from "react";
import { moviesContext } from "../../utils/context";

export default function Modal(){
    const {modalMessage, setModalMessage} = useContext(moviesContext);

    useEffect(() => {
        const timer = setInterval(() => {
            setModalMessage('');
        }, 2000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return <div className="modal-window">
        <span className="modal-close" onClick={() => {setModalMessage('')}}>×</span>
        <p className="modal-text">{modalMessage}</p>
    </div>
}