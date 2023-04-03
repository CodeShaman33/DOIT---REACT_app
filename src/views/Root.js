import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Wrapper, FormWrapper } from "./Root.style";
import {useForm} from 'react-hook-form'
//components
import MainTemplate from "components/templates/MainTemplate";
import Tasks from "./Tasks";
import axios from "axios";

//authenticated app
const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <MainTemplate>
        <Switch>
          <Route path="/" exact>
            <Tasks />
          </Route>
        </Switch>
      </MainTemplate>
    </Wrapper>
  );
};

const handleSignIn = async ({ login, password }) => {
  try {
    const response = await axios.post('/login', {
      login,
      password,
    });
    localStorage.setItem('token', response.data.token);
  } catch (e) {
  }
};

const onSubmit = ({login, password}) => {
  console.log(password);
  axios.post('/login', {
    login, 
    password,
  })
  .then((response) => console.log(response))
  .catch((e) => console.log('e'))
};

//UnauthenticatedApp
const UnauthenticatedApp = ({handleSignIn}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="login">enter login:</label>
        <input
        id="login"
          type="login"
          {...register("login", {
            required: "Required",
           
          })}
        />
        {errors.login && errors.login.message}

        <input id="password"
        type="password"
          {...register("password")}
        />
        {errors.password && errors.password.message}

        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

function Root() {
  const [user, setUser] = React.useState(null);

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

  



  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp login={handleSignIn}/>}
      </ThemeProvider>
    </Router>
  );
}

export default Root;
