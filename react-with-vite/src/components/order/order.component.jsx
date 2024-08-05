import { useDispatch, useSelector } from "react-redux";
import { addMenuItem, removeMenuItem, selectAmountById} from "../../redux/entities/cart/index";

import { Counter } from "../counter/counter.component";

export const Order = ({id}) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectAmountById(state, id));
  
  const addItem = () => {
    dispatch(addMenuItem(id));
  };

  const removeItem = () => {
    dispatch(removeMenuItem(id));
  };
  return (
    <div>
      <Counter value={amount} increment={addItem} decrement={removeItem} />
    </div>
  );
};
