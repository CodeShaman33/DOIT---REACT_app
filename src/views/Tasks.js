// import React from 'react'
import TasksList from "components/organisms/TasksList/TasksList";
import { useTasks } from "hooks/useTasks";
import useModal from "hooks/useModal";
import { useState } from "react";

const Tasks = () => {
  const { tasks } = useTasks();
  const { Modal,  modalState, handleModalOpen, handleModalClose } = useModal();
  const [modalData, setModalData] = useState({});
  // handleModalClose, handleModalOpen,
  const handleOpenTaskDetail = (data) => {
    console.log(modalData);
    setModalData(data);
    handleModalOpen();
    
  }

  return (
    <>
    <TasksList handleOpenTaskDetail={handleOpenTaskDetail} tasks={tasks} />
    {modalState ? <Modal handleModalClose={handleModalClose}>
      <h1>{modalData}</h1>
    </Modal> : null}
   </>
  )
   
 
};

export default Tasks;
