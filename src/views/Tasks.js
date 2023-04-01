// import React from 'react'
import TasksList from "components/organisms/TasksList/TasksList";
import { useTasks } from "hooks/useTasks";
import useModal from "hooks/useModal";
import { useState } from "react";
import axios from "axios";

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

  const handleObjectUpdate =(id) => {
    const newData = 'string test';
    axios 
    .put(`/api/updateTask/${id}`, newData)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <TasksList handleOpenTaskDetail={handleOpenTaskDetail} tasks={tasks} />
   <Modal isOpen={modalState} handleModalClose={handleModalClose}>
      <h1>{modalData.task}</h1>
      <input type="text" id="taskchange"/>
      <label htmlFor="taskchange">edit task</label>
      <button onClick={()=>handleObjectUpdate(modalData.id)}>edit task</button>
    </Modal>
   </>
  )
   
 
};

export default Tasks;
