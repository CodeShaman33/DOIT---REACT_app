import axios from "axios";

import { useForm } from "react-hook-form";
import React from "react";

export const UnAuthenticatedApp = ({
  handleSignIn,
  loginError,
  setUser,
  setError,
}) => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <form
      onSubmit={handleSubmit((data) => handleSignIn(data, setUser, setError))}
    >
      <label htmlFor="email">enter email:</label>
      <input
        type="text"
        id="email"
        {...register("login", { required: true })}
      />
      <label htmlFor="password">enter email:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export const handleSignIn = async ({ login, password }, setUser, setError) => {
  try {
    const response = await axios.post("/login", {
      login,
      password,
    });
    console.log(response);
    setUser(response.data);
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    setError("Please provide valid user data");
  }
};

export const logInWithCookies = (setUser, setError) => {
  const token = localStorage.getItem("token");
  if (token) {
    axios
      .get("/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((e) => setError);
  }
};
