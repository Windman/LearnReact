import { Button } from "../button/button.component";
import { useUser } from "../context/user.context";

export const LoginButton = () => {
  const { value: user, loginUser } = useUser();
  return <Button text={!user.isAuthorized ? "login": "logout"} onClick={loginUser} />;
};
