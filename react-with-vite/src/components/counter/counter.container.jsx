import { useState } from "react";
import { Counter } from "./counter.component";

const counterMin = 0;
const counterMax = 100;

export const CounterContainer = ({
  counter = 0,
  min = counterMin,
  max = counterMax,
  onChanges = ()=>{},
}) => {
  const [value, setValue] = useState(counter); 
  
  const increment = () => {
    if (value >= max) {
      return;
    }
    onChanges(value + 1);
    setValue(value + 1);
    
  };
  const decrement = () => {
    if (value <= min) {
      return;
    }
    onChanges(value - 1);
    setValue(value - 1);
  };
  
  return <Counter value={value} increment={increment} decrement={decrement} />;
};
