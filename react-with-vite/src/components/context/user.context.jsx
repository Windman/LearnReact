import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const anonimusUser = '';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(anonimusUser);

  const loginUser = useCallback((login) => {
    setUser(login);
  }, []);

  return (
    <UserContext.Provider value={{ value: user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};