// import React from 'react'
import TasksList from "components/organisms/TasksList/TasksList";
import { useTasks } from "hooks/useTasks";
import useModal from "hooks/useModal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Tasks = () => {
  const { tasks } = useTasks();

 useEffect(() =>{
  if(tasks) {
    setTodos(tasks);
  }
 }, [tasks])

  const [todos, setTodos] = useState(tasks)
  const { Modal,  modalState, handleModalOpen, handleModalClose } = useModal();
  const [modalData, setModalData] = useState({});
  const [newData, setNewData] = useState('');

  // handleModalClose, handleModalOpen,




  const handleOpenTaskDetail = (data) => {
    console.log(modalData);
    setModalData(data);
    handleModalOpen();
  }

  const handleObjectUpdate =(id) => {
    axios 
    .put(`/api/updateTask/${id}`, newData)
    .then(response => {
      // const updatedTodo = response.data.matchingTask;
      console.log(response.data.matchingTask);
      console.log(todos)

      

      // const updatedTodos = todos.map((todo) => 
      //   todo.id === updatedTodo.id ? updatedTodo : todo
      // )
      // setTodos(updatedTodos)
    })
    .catch(err => console.log(err));
  }

  const handleInputChange = (event) => {
    setNewData(event.target.value)
  }

  return (
    <>
    <TasksList handleOpenTaskDetail={handleOpenTaskDetail} tasks={todos} />
   <Modal isOpen={modalState} handleModalClose={handleModalClose}>
      <h1>{modalData.task}</h1>
      <input type="text" id="taskchange" onChange={handleInputChange} />
      <label htmlFor="taskchange">edit task</label>
      <button onClick={()=>handleObjectUpdate(modalData.id)}>edit task</button>
    </Modal>
   </>
  )
   
 
};

export default Tasks;
