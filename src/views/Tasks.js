// import React from 'react'
import TasksList from "components/organisms/TasksList/TasksList";
import { useTasks } from "hooks/useTasks";


const Tasks = () => {
  const {tasks} = useTasks();

  return <TasksList tasks={tasks}/>;
};

export default Tasks;
