import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { selectCartState } from "../../redux/ui/cart/cart";

export const Cart = () => {
  const cart = useSelector((state) => selectCartState(state));
  return (
    <div className={styles.cart}>
      <ul>
        {cart.map(({itemId, amount}) => (
          <li key={itemId}>
            {itemId} - {amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
