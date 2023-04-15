import React from "react";
import { useState } from "react";
//style
import { TaskWrapper, MainArea } from "./TaskItem.style";
//components
import CheckBox from "../CheckBox/CheckBox";
import { useRemoveTaskMutation } from "store";

const TaskItem = ({task, ...props}) => {
  const [date, setDate] = useState(null);
  const [removeTask, rest] = useRemoveTaskMutation();
  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
    console.log(rest);
  };

  const handleRemoveTask = (event) => {
    event.preventDefault();
    removeTask(task.id)
  }

  return (
    <>
      <TaskWrapper >
        <CheckBox priority={task.priority}/>
        <MainArea>
          <div {...props} className="content">{task.content}</div>
          <div className="add-ons">
            <label htmlFor="priority"></label>
            <select name="priority" id="priority">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="date" onChange={handleDateChange} />
            <button onClick={handleRemoveTask}>delete</button>
          </div>
        </MainArea>
        {/* <Options>
          <TaskButton>Set Date</TaskButton>
          <TaskButton>Delete</TaskButton>
        </Options> */}
      </TaskWrapper>
    </>
  );
};

export default TaskItem;
