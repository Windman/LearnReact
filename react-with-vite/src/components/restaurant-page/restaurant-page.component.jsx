import { useParams } from "react-router-dom";
import { RestaurantCard } from "../restaurant-card/restaurant-card.component";

export const RestaurantPage = () => {
  const { restId } = useParams();

  return (
    <>
      <RestaurantCard id={restId ?? 0} />
    </>
  );
};
