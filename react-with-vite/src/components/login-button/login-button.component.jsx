import { Button } from "../button/button.component";
import { useUser } from "../context/user.context";

export const LoginButton = () => {
  const { userName, loginUser } = useUser();
  return <Button text={userName ?? "login"} onClick={loginUser} />;
};
