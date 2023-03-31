import { useState } from "react";
import Modal from "components/organisms/Modal/Modal";

const useModal = (initialState = false) => {
    const [modalState, setModalState] = useState(initialState);
    const handleModalClose = () => setModalState(false); 
    const handleModalOpen = () => setModalState(true); 

    return {
        Modal,
        handleModalClose,
        handleModalOpen,
        modalState,
    }

}

export default useModal;