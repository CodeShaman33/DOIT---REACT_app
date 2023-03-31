import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Wrapper } from "./Modal.style";

const modalContainer = document.getElementById("modal-container");

const Modal = ({children, handleModalClose}) => {
  const modalNode = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);
  return ReactDOM.createPortal(
    <Wrapper>
        {children}
        <button  onClick={handleModalClose}>
            close modal
        </button>
    </Wrapper>,
    document.getElementById("modal-container")
  );
};

export default Modal;
