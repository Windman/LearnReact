import { Button } from "../button/button.component";
import { useUser } from "../context/user.context";

export const LoginButton = () => {
  const { value: userName, loginUser } = useUser();
  return <Button text={userName === "anonimus" ? "login": "logout"} onClick={loginUser} />;
};
