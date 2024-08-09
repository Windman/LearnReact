import { Title } from "../title/title.component";
import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunts";

export const RestaurantCard = ({ id }) => {
  const restaurant = useSelector((state) => selectRestarauntById(state, id));

  if (!isValidRestaurantGuard(restaurant)) return null;

  return (
    <div key={restaurant.id}>
      <Title name={restaurant.name} />
    </div>
  );
};

const isValidRestaurantGuard = (item) => {
  if (
    !item ||
    !item.id ||
    !item.name ||
    !item.menu ||
    !item.menu.length ||
    !item.reviews ||
    !item.reviews.length
  ) {
    return false;
  }

  return true;
};
