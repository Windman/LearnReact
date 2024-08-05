import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { selectCartState } from "../../redux/entities/cart";

export const Cart = () => {
  const cart = useSelector((state) => selectCartState(state));
  return (
    <div className={styles.cart}>
      <ul>
        {Object.keys(cart).map((menuId) => (
          <li key={menuId}>
            {menuId} - {cart[menuId]}
          </li>
        ))}
      </ul>
    </div>
  );
};
