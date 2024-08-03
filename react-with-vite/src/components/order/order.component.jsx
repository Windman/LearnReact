import { useDispatch, useSelector } from "react-redux";

import {
  addCartItem,
  removeCartItem,
  selectCartByUserId,
} from "../../redux/entities/cart/index";
import { Counter } from "../counter/counter.component";
import { useUser } from "../context/user.context";

export const Order = ({menuItem}) => {
  const { value: user } = useUser();
  const dispatch = useDispatch();
  const cart = useSelector((state) => selectCartByUserId(state, user.id));
  
  const addItem = () => {
    dispatch(addCartItem({userId: user.id, menuId: menuItem.id, count: 1}));
  };

  const removeItem = () => {
    dispatch(removeCartItem({userId: user.id, menuId: menuItem.id}));
  };
  return (
    <div>
      <Counter value={cart.amount} increment={addItem} decrement={removeItem} />
    </div>
  );
};
