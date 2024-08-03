import { useUser } from "../context/user.context";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { selectCartByUserId } from "../../redux/entities/cart";

export const Cart = () => {
  const { value: user } = useUser();
  const cart = useSelector((state) => selectCartByUserId(state, user.id));

  return (
    <div className={styles.cart}>
      Cart 
    </div>
  );
};
