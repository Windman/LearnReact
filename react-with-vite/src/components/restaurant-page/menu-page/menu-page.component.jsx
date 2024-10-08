import { useSelector } from "react-redux";
import { RestaurantMenuItem } from "../../restaurant-card/restaurant-menu-item/restaurant-menu-item.component";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { selectMenuIds } from "../../../redux/entities/menu";
import { getMenu } from "../../../redux/entities/menu/get-menu";
import { useRequest } from "../../../hooks/use-request";

export const RestaurantMenuPage = () => {
  const { restId } = useParams();
  
  const ids = useSelector(selectMenuIds);

  const requestStatus = useRequest(getMenu, restId);

  if (requestStatus === "pending") {
    return <div>...loading</div>;
  }

  if (requestStatus === "rejected") {
    return <div>error</div>;
  }

  if (!ids.length) {
    return null;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {ids.map((dishId) => (
          <li key={dishId} className={styles.item}>
            <RestaurantMenuItem id={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
