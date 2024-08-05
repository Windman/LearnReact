import { Order } from "../../order/order.component";
import { useSelector } from "react-redux";
import { selectMenuById } from "../../../redux/entities/menu/index";
import styles from "./styles.module.css";

export const RestaurantMenuItem = ({ id }) => {
  const menuItem = useSelector((state) => selectMenuById(state, id));

  return (
    <div className={styles.item}>
      <div className="label">{menuItem.name}</div>
      <div className="counter">
        <Order id={id} />{" "}
      </div>
    </div>
  );
};
