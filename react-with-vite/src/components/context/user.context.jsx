import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const anonimusUser = "anonimus";
const signedInUser = "Max";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(anonimusUser);

  const loginUser = useCallback(() => {
    if (user === "anonimus"){
      setUser(signedInUser);
    } else {
      setUser(anonimusUser);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ value: user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
