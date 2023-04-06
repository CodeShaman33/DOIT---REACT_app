import React from "react";

export const GlobalContext = React.createContext({
  user: null,
  handleAddUser: () => {},
});

const GlobalProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const handleAddUser = (userObject) => {
    setUser(userObject);
  };

  return (
    <GlobalContext.Provider value={{ user, handleAddUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
