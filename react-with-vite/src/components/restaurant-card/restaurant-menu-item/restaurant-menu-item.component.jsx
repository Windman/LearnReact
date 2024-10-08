import { useSelector } from "react-redux";
import { selectMenuById } from "../../../redux/entities/menu/index";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const RestaurantMenuItem = ({ id }) => {
  const menuItem = useSelector((state) => selectMenuById(state, id));

  return (
    <div className={styles.item}>
     <NavLink to={`/dish/${menuItem.id}`}>{menuItem.name}</NavLink>
    </div>
  );
};
