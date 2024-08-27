import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { selectRestaurantById } from "../../../redux/entities/restaurants";

export const RestaurantLink = ({ id }) => {
  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <NavLink className={(isActive) => isActive && styles.activeLink} to={id}>
      {({ isActive }) => (isActive ? <span>current - {name}</span> : name)}
    </NavLink>
  );
};
