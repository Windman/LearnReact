import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const userName = "Max";

const anonimusUser = {
  name: "anonimus",
  isAuthorized: false,
};

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(anonimusUser);

  const loginUser = useCallback(() => {
    if (!user.isAuthorized) {
      setUser({...user, name: userName, isAuthorized: true});
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
