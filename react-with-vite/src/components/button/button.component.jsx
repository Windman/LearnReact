import classnames from "classnames";
import styles from "./styles.module.css";

import { useTheme } from "../theme-context/theme-context";

export const Button = ({
  text,
  onClick,
  viewVariant = "default",
  className,
}) => {
  const { value: themeValue } = useTheme();

  return (
    <button
      className={classnames(styles.button, className, {
        [styles.default]: viewVariant === "default",
        [styles.small]: viewVariant === "small",
        [styles.light]: themeValue === "light",
        [styles.dark]: themeValue === "dark",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};