import axios from "axios";
// import { response } from "msw";
import { useEffect, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

useEffect(() => {
        axios.get('/')
        .then(response => {setTasks(response.data.TasksTable)} )
        .catch(err => {console.log(err)});
    }, []);

    return {
        tasks,
    }
}