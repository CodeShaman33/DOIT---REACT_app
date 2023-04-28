import React, { useState } from "react";
//styles
import { Wrapper, FormWrapper } from "./TasksList.style";
//components
import TaskItem from "components/atoms/TaskItem/TaskItem";
import { useAddTaskMutation } from "store";


const TasksList = ({ tasks, handleOpenTaskDetail }) => {
  const [addTask] = useAddTaskMutation();
  const [newContent, setNewContent] = useState("");
  const [priority, setPriority] = useState(4);

  const handleAddTask = (e) => {
    e.preventDefault();
    const noLettersOrNumbers = /[a-zA-Z]|[0-9]/.test(newContent);
    if (noLettersOrNumbers) {
      addTask({
        content: newContent,
        priority: priority,
      });
      document.getElementById("content").defaultValue = "";
    } else {
      alert("content required");
    }

    setNewContent("");

    console.log("add task started");
  };

  return (
    <Wrapper>
      <h1>Task List:</h1>
      <FormWrapper as="form" onSubmit={handleAddTask}>
        <label htmlFor="content">content:</label>
        <textarea
          type="text"
          id="content"
          defaultValue={newContent}
          onChange={(e) => {
            setNewContent(e.target.value);
          }}
        />
        <label htmlFor="priority">priority: </label>
        <select
          name="priority"
          id="priority"
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 </option>
        </select>
        <button type="submit">add task</button>
      </FormWrapper>
      {tasks.map((task) => (
        <TaskItem
          onClick={() => handleOpenTaskDetail(task)}
          task={task}
          key={task.id}
        />
      ))}
    </Wrapper>
  );
};

export default TasksList;
