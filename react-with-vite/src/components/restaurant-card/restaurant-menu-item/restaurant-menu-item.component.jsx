import { CounterContainer } from "../../counter/counter.container";
import { useUser } from "../../context/user.context";
import { useSelector } from "react-redux";
import { selectMenuById } from "../../../redux/entities/menu/index";
import styles from "./styles.module.css";

const maxMenuItemCount = 5;
const minMenuItemCount = 0;

export const RestaurantMenuItem = ({ id }) => {
  const { value: user } = useUser();
  const menuItem = useSelector((state) => selectMenuById(state, id));

  return (
    <div className={styles.item}>
      <div className="label">{menuItem.name}</div>
      <div className="counter">
        {user.isAuthorized ? (
          <CounterContainer min={minMenuItemCount} max={maxMenuItemCount} />
        ) : undefined}
      </div>
    </div>
  );
};
