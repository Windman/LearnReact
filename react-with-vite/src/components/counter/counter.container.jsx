import { useState } from "react";
import { Counter } from "./counter.component";

export const CounterContainer = ({ min, max }) => {
  const [value, setValue] = useState(min);

  const increment = () => {
    if (value >= max) {
      return;
    }
    setValue(value + 1);
  };
  const decrement = () => {
    if (value <= min) {
      return;
    }
    setValue(value - 1);
  };

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
