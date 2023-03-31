import React from "react";
//styles
import { Wrapper } from "./TasksList.style";
//components
import TaskItem from "components/atoms/TaskItem/TaskItem";

const TasksList = ({tasks, handleOpenTaskDetail}) => {
  console.log(tasks);
  return (
    <Wrapper>
        <h1>Task List:</h1>
      
      {tasks.map((task) =>(
        <TaskItem onClick={() => handleOpenTaskDetail(task.task)} task={task}/>
      ))}
    </Wrapper>
  );
};

export default TasksList;
