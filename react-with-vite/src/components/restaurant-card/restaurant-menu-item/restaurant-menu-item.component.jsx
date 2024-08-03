import { Order } from "../../order/order.component";
import { useUser } from "../../context/user.context";
import { useSelector } from "react-redux";
import { selectMenuById } from "../../../redux/entities/menu/index";
import styles from "./styles.module.css";

export const RestaurantMenuItem = ({ id }) => {
  const { value: user } = useUser();
  const menuItem = useSelector((state) => selectMenuById(state, id));

  return (
    <div className={styles.item}>
      <div className="label">{menuItem.name}</div>
      {/* <div className="counter">{user.isAuthorized ? <Order menuItem={menuItem} /> : undefined}</div> */}
      <div className="counter">
        <Order menuItem={menuItem} />{" "}
      </div>
    </div>
  );
};
