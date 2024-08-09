import { useDispatch, useSelector } from "react-redux";
import {
  addMenuItem,
  removeMenuItem,
  selectAmountById,
} from "../../redux/ui/cart/cart";
import { Counter } from "../counter/counter.component";
import { useUser } from "../context/user.context";

export const Order = ({ id }) => {
  const { value: user } = useUser();
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectAmountById(state, id));

  if (!user.isAuthorized) return null;

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
