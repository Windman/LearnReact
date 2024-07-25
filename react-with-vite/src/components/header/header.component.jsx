import classnames from "classnames";
import { ThemeSwitcherButton } from "../theme-button/theme-button.component";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={classnames(styles.button)}>
      <h1>Restaurants</h1>
      <ThemeSwitcherButton />
    </header>
  );
};
