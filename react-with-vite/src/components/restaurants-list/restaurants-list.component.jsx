import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaraunts";
import { RestaurantLink } from "./restaurant-link/restaurant-link.component";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantIds);

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
