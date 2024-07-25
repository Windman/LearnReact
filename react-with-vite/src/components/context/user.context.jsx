import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const anonimusUser = 'anonimus';
const hardCodedUserName = "Max";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(anonimusUser);

  const loginUser = useCallback(() => {
    setUser(hardCodedUserName);
  }, []);

  return (
    <UserContext.Provider value={{ value: user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};