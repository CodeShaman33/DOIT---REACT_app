import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios
 from "axios";
//components
import MainTemplate from "components/templates/MainTemplate";
// import Tasks from "./Tasks";
// import { async } from "q";
import { useForm } from "react-hook-form";


const AuthenticatedApp = () => {
  return (
    <>
      <div>
        fgrwedfgerewrijiwweiruewirui iuiefuiw uweiofu weof ewiof ewu ioewufoewiuf ewoiu weo
      </div>
    </>
  );
};

const UnAuthenticatedApp = ({ handleSignIn, loginError }) => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
    
    <label htmlFor="email">enter email:</label>
    <input type="text" id="email" {...register('login', { required: true })}/>
    <label htmlFor="password">enter email:</label>
    <input type="password" id="password" {...register('password', { required: true })}/>

      <input type="submit" />
    </form>
  );
}


function Root() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);


  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);


  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      console.log(response);
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      setError('Please provide valid user data');
    }
  };


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/" exact>
            {user ? <AuthenticatedApp /> : <UnAuthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
            </Route>
            <Route path="/login" >

            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
