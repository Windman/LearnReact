import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const realUser = {
  id: "1",
  name: "Max",
  isAuthorized: true,
}

const anonimusUser = {
  id: "0",
  name: "anonimus",
  isAuthorized: false,
};

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(anonimusUser);

  const loginUser = useCallback(() => {
    if (!user.isAuthorized) {
      setUser(realUser);
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
