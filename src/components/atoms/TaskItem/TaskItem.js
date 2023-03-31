import React from "react";
import { useState } from "react";
//style
import { TaskWrapper, MainArea, Options, TaskButton } from "./TaskItem.style";
//components

const TaskItem = ({task, ...props}) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  return (
    <>
      <TaskWrapper {...props}>
        <div className="check-box">
          <input type="checkbox" />
        </div>
        <MainArea>
          <div className="content">{task.task}</div>
          <div className="add-ons">
            <label htmlFor="priority"></label>
            <select name="priority" id="priority">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="date" onChange={handleDateChange} />
          </div>
        </MainArea>
        <Options>
          <TaskButton>Set Date</TaskButton>
          <TaskButton>Delete</TaskButton>
        </Options>
      </TaskWrapper>
      <div>dsfds</div>
    </>
  );
};

export default TaskItem;
