import classnames from "classnames";
import { ThemeSwitcherButton } from "../theme-button/theme-button.component";
import styles from "./styles.module.css";
import { useUser } from "../context/user.context";
import { LoginButton } from "../login-button/login-button.component";

export const Header = () => {
  const userContext = useUser();
  let userLogin = undefined;
  
  if (!userContext) {
    console.error("user context error");
  }

  userLogin = userContext?.value;

  return (
    <header className={classnames(styles.button)}>
      <h1>Restaurants</h1>
      <span className={styles.splitter}></span>
      <div className={styles.username}>
        user name: {userLogin ?? "anonimus"}
      </div>
      <LoginButton className={classnames(styles.loginButton)}></LoginButton>
      <ThemeSwitcherButton />
    </header>
  );
};
