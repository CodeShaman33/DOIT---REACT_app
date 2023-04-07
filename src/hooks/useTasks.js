import axios from "axios";
// import { response } from "msw";
import { useEffect, useState } from "react";

//this fonction, called interceptor adds token to every axios action, and in that way validate avery endpoint

const tasksAPI = axios.create({});

tasksAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksAPI
      .get("/")
      .then((response) => {
        setTasks(response.data.allTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    tasks,
  };
};
