import React from 'react'
import TasksList from "components/organisms/TasksList/TasksList";
// import { useTasks } from "hooks/useTasks";
// import useModal from "hooks/useModal";
// import { useState } from "react";
// import axios from "axios";
import {useGetTasksQuery} from 'store'



const Tasks = () => {


    const {data, isLoading} = useGetTasksQuery()  
   console.log(data, isLoading)

 
  // const { Modal,  modalState, handleModalOpen, handleModalClose } = useModal();
  // const [modalData, setModalData] = useState({});
  // handleModalClose, handleModalOpen,
  // const handleOpenTaskDetail = (data) => {
  //   console.log(modalData);
  //   setModalData(data);
  //   handleModalOpen();
  // }



  return (

    <>
    {data ? <TasksList tasks={data.tasks} /> : <h2>Loading...</h2>}
   {/* <Modal isOpen={modalState} handleModalClose={handleModalClose}>
      <h1>{modalData.task}</h1>
      <input type="text" id="taskchange"/>
      <label htmlFor="taskchange">edit task</label>
      <button onClick={()=>handleObjectUpdate(modalData.id)}>edit task</button>
    </Modal> */}
   </>
  )
   
 
};

export default Tasks;
