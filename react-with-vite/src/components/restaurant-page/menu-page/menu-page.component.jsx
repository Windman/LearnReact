import { useSelector } from "react-redux";
import { RestaurantMenuItem } from "../../restaurant-card/restaurant-menu-item/restaurant-menu-item.component";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../../redux/entities/restaurants";

export const RestaurantMenuPage = () => {
  const { restId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restId)
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
