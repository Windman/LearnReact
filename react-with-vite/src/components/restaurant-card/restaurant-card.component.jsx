import { ReviewForm } from "./review-form/review-form.component";
import { RestaurantMenu } from "./restaurant-menu/restaurant-menu.component";
import { Title } from "../title/title.component";
import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunts";

export const RestaurantCard = ({ id }) => {
  const restaurant = useSelector((state) => selectRestarauntById(state, id));
 
  if (!isValidRestaurantGuard(restaurant)) return null;

  return (
    <div className="restaurant-card" key={restaurant.id}>
      <Title name="Restaurants" />
      <div className="restaurant-card__name">
        <h1>{restaurant.name}</h1>
      </div>
      <RestaurantMenu menuIds={restaurant.menu}></RestaurantMenu>
      <div className="restaurant-card__reviews">
        <h3>Reviews</h3>
        <ul className="restaurant-card__review-list">
          {restaurant.reviews.map((reviewItem) => (
            <li key={reviewItem.id}>{reviewItem.text}</li>
          ))}
        </ul>
        <ReviewForm />
      </div>
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
