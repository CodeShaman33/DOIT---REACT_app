import React from "react";
//styles
import { Wrapper } from "./TasksList.style";
//components
import TaskItem from "components/atoms/TaskItem/TaskItem";

const TasksList = () => {
  return (
    <Wrapper>
        <h1>Task List:</h1>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />

    </Wrapper>
  );
};

export default TasksList;
