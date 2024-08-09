import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { selectRestarauntById } from "../../../redux/entities/restaraunts";

export const RestaurantLink = ({ id }) => {
  const { name } =
    useSelector((state) => selectRestarauntById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <NavLink className={(isActive) => isActive && styles.activeLink} to={id}>
      {({ isActive }) => (isActive ? <span>current - {name}</span> : name)}
    </NavLink>
  );
};
