import React, { useState } from "react";
import { TaskWrapper, MainArea, TaskText } from "./TaskItem.style";
import CheckBox from "../CheckBox/CheckBox";
import { useRemoveTaskMutation, useCompleteTaskMutation, useChangePriorityMutation } from "store";

const TaskItem = ({task, ...props}) => {
  const [date, setDate] = useState(null);
  const [completeTask] = useCompleteTaskMutation();
  const [removeTask] = useRemoveTaskMutation();
  const [changePriority] = useChangePriorityMutation();
  const [completed, setCompleted] = useState(task.done)
  const [priority, setPriority] = useState(task.priority)
  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
 
  };

  const handleRemoveTask = (event) => {
    event.preventDefault();
    removeTask(task.id)
  }

  const handleCheck = (event) => {
    console.log('checked checked')
 
      completeTask(task.id)
      setCompleted(!completed)
   
  }

  const handlePriorityChange = (event) => {
    event.preventDefault();
    changePriority({id: task.id, ...parseInt(event.target.value, 10)});
    setPriority(parseInt(event.target.value, 10))
  }

  

  return (
  
      <TaskWrapper checked={completed} priority={priority}>
        {console.log('item redendered')}
        <p>{priority}</p>
        <p>{typeof(priority)}</p>
        <CheckBox priority={priority} taskChecked={completed} onClick={handleCheck}/>
        <MainArea>
          <TaskText checked={completed}>{task.content}</TaskText>
          <div className="add-ons">
            <label htmlFor="priority"></label>
            <select name="priority" id="priority" defaultValue={task.priority} onChange={handlePriorityChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="date" onChange={handleDateChange} defaultValue={task.date}/>
            <button onClick={handleRemoveTask}>delete</button>
          </div>
        </MainArea>

      </TaskWrapper>

  );
};

export default TaskItem;
