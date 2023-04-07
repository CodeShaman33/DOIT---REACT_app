// import axios from "axios";

import { useForm } from "react-hook-form";
import React from "react";
import { AuthContext } from "hooks/useAuth";
import styled from "styled-components";

export const UnAuthenticatedApp = () => {
  const { signIn } = React.useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & form {
        border: 1px solid black;
        width: 300px;
        height: 350px;
        top: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;

        & label {
            margin-top: 40px;
            margin-bottom: 10px;
        }



  
        

        & input:last-of-type {
            margin-top: 100px;
        }
    }
  `;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(signIn)}>
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
    </Wrapper>
  );
};
