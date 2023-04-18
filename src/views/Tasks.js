import React from 'react'
import TasksList from "components/organisms/TasksList/TasksList";
// import { useTasks } from "hooks/useTasks";
import useModal from "hooks/useModal";
import { useState } from "react";
import {useGetTasksQuery, useUpdateTaskMutation} from 'store'



const Tasks = () => {


    const {data, isLoading} = useGetTasksQuery()  
   console.log(data, isLoading)

 
  const { Modal,  modalState, handleModalOpen, handleModalClose } = useModal();
  const [modalData, setModalData] = useState({});
  const [editedContent, setEditedContent] = useState('');
  const [updateTask] = useUpdateTaskMutation();
  // handleModalClose, handleModalOpen,
  const handleOpenTaskDetail = (taskData) => {
    console.log(taskData);
    setEditedContent(taskData.content);
    setModalData(taskData);
    handleModalOpen();
  }

const handleEditTask = (e) => {
  e.preventDefault();
  updateTask({id: modalData.id, ...editedContent})
}

  return (

    <>
    {data ? <TasksList tasks={data.tasks} handleOpenTaskDetail={handleOpenTaskDetail} /> : <h2>Loading...</h2>}
   <Modal isOpen={modalState} handleModalClose={handleModalClose}>
      

      <textarea name="" id="" cols="30" rows="10" onChange={(e) => setEditedContent(e.target.value)} defaultValue={modalData.content} />

      <label htmlFor="taskchange">edit task</label>

      <button onClick={handleEditTask}>edit task</button>
      <h3>{editedContent}</h3>
    </Modal>
   </>
  )
   
 
};

export default Tasks;
