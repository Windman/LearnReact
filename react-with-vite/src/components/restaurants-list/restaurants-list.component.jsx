import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaraunts";
import { RestaurantLink } from "./restaurant-link/restaurant-link.component";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul>
      {ids.map((id) => (
        <li key={id}>
          <RestaurantLink id={id} />
        </li>
      ))}
    </ul>
  );
};
