import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants";
import { RestaurantLink } from "./restaurant-link/restaurant-link.component";
import { useRequest } from "../../hooks/use-request";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurants);

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
    <ul>
      {ids.map((id) => (
        <li key={id}>
          <RestaurantLink id={id} />
        </li>
      ))}
    </ul>
  );
};
