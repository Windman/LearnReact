import classNames from "classnames";
import { Button } from "../button/button.component";
import styles from "./styles.module.css";

export const Counter = ({ value, increment, decrement, viewVariant }) => {
  return (
    <div
      className={classNames(styles.counter, {
        [styles.default]: viewVariant === "default",
        [styles.small]: viewVariant === "small",
      })}
    >
      <Button onClick={decrement} text="-"></Button>
      <div className="counter-value">{value}</div>
      <Button onClick={increment} text="+"></Button>
    </div>
  );
};
