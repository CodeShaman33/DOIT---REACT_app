import React from "react";
import { Wrapper } from "./TasksList.style";
import TaskItem from "components/atoms/TaskItem/TaskItem";
// import { useAddTaskMutation } from "store";


const TasksList = ({ tasks, handleModalOpen, modalState }) => {
  // const [addTask] = useAddTaskMutation();
  // const [newContent, setNewContent] = useState("");
  // const [priority, setPriority] = useState(4);

  // const handleAddTask = (e) => {
  //   e.preventDefault();
  //   const noLettersOrNumbers = /[a-zA-Z]|[0-9]/.test(newContent);
  //   if (noLettersOrNumbers) {
  //     addTask({
  //       content: newContent,
  //       priority: priority,
  //     });
  //     document.getElementById("content").defaultValue = "";
  //   } else {
  //     alert("content required");
  //   }
  //   setNewContent("");
  // };

  const sortedTasks = [...tasks].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log(modalState)
    handleModalOpen();
  }

  return (
    <Wrapper>
      <h1>Task List:</h1>
      <button onClick={handleButtonClick}>add task</button>
      {/* <FormWrapper as="form" onSubmit={handleAddTask}>
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
      </FormWrapper> */}
      {sortedTasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
        />
      ))}
    </Wrapper>
  );
};

export default TasksList;
