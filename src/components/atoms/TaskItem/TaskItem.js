import React from "react";
//style
import { TaskWrapper, MainArea, Options, TaskButton } from "./TaskItem.style";
//components



const TaskItem = () => {
  return (
    <TaskWrapper>
      <div className="check-box">
        <input type="checkbox" />
      </div>
      <MainArea>
        <div className="content">content</div>
        <div className="add-ons">add-ons</div>
      </MainArea>
      <Options>
        <TaskButton>Set Date</TaskButton>
        <TaskButton>Delete</TaskButton>
      </Options>
    </TaskWrapper>
  );
};

export default TaskItem;