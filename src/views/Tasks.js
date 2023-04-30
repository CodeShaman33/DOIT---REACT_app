import React from "react";
import TasksList from "components/organisms/TasksList/TasksList";
// import { useTasks } from "hooks/useTasks";
import useModal from "hooks/useModal";
import { useGetTasksQuery } from "store";
import { useAddTaskMutation } from "store";

const Tasks = () => {
  const [addTask] = useAddTaskMutation();

  const { data, isLoading } = useGetTasksQuery();
  console.log(data, isLoading);

  const { Modal, modalState, handleModalClose, handleModalOpen } = useModal();

  const handleAddTask = () => {
    handleModalOpen();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.elements.content.value;
    const priority = event.target.elements.priority.value;
    const date = event.target.elements.date.value;

    const task = {
      content,
      priority,
      date,
    };

    console.log(task);
    addTask(task)
  };

  return (
    <>
      {data ? (
        <TasksList
          tasks={data.tasks}
          modalState={modalState}
          handleModalOpen={handleAddTask}
        />
      ) : (
        <h2>Loading...</h2>
      )}
      <Modal isOpen={modalState} handleModalClose={handleModalClose}>
        <form onSubmit={handleSubmit}>
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
          <select name="priority" id="priority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input type="date" id="date" name="date" defaultValue={'2023-04-29'}/>
          <button type="submit">add task</button>
        </form>
      </Modal>
    </>
  );
};

export default Tasks;
