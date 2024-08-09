import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../../redux/entities/restaraunts";
import { RestaurantMenuItem } from "../../restaurant-card/restaurant-menu-item/restaurant-menu-item.component";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

export const RestaurantMenuPage = () => {
  const { restId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestarauntById(state, restId)
  );
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((id) => (
          <li key={id} className={styles.item}>
            <RestaurantMenuItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
