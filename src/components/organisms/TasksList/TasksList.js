import React, { useState } from "react";
//styles
import { Wrapper, FormWrapper } from "./TasksList.style";
//components
import TaskItem from "components/atoms/TaskItem/TaskItem";
// import { TaskWrapper } from "components/atoms/TaskItem/TaskItem.style";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useAddTaskMutation } from "store";


const TasksList = ({tasks, handleOpenTaskDetail}) => {

  

  const storedTasks = useSelector((state) => state.tasks);
  // const dispatch = useDispatch();
  const[addTask, rest] = useAddTaskMutation();
  console.log(rest);
const[newContent, setNewContent] = useState('');
const[priority, setPriority] = useState(4);

const handleAddTask = (e) => {
  e.preventDefault();

    addTask({
      content: newContent,
      priority: priority,
    })

    console.log('add task started');

}


  console.log(storedTasks);
  return (
    <Wrapper>
        <h1>Task List:</h1>
        <FormWrapper as='form' onSubmit={handleAddTask}>
          <label htmlFor="content">content:</label>
      <input type="text" id="content" onChange={(e) => {setNewContent(e.target.value)}}/>
      <label htmlFor="priority">priority: </label>
      <select name="priority" id="priority" onChange={(e) => {setPriority(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4   </option>
      </select>
      <button type="submit">add task</button>
    </FormWrapper>
      {tasks.map((task) =>(
        <TaskItem onClick={() => handleOpenTaskDetail(task)} task={task}/>
      ))}
    </Wrapper>
  );
};

export default TasksList;
