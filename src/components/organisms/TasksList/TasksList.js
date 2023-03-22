import React from "react";
//styles
import { Wrapper } from "./TasksList.style";
//components
import TaskItem from "components/atoms/TaskItem/TaskItem";

const TasksList = ({tasks}) => {
  console.log(tasks);
  return (
    <Wrapper>
        <h1>Task List:</h1>
      <TaskItem />
      {tasks.map((task) =>(
        <div>{task.task}</div>
      ))}
    </Wrapper>
  );
};

export default TasksList;
