import React from "react";
import { Wrapper } from "./Modal.style";


const Modal = ({children, handleModalClose, isOpen}) => {

  return (
    <Wrapper isOpen={isOpen} onRequestClose={handleModalClose}>
        {children}
        <button  onClick={handleModalClose}>
            close modal
        </button>
    </Wrapper>
  )
}

export default Modal;
