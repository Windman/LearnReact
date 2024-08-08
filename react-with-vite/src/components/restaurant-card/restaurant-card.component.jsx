import { ReviewForm } from "./review-form/review-form.component";
import { RestaurantMenuItem } from "./restaurant-menu-item/restaurant-menu-item.component";
import { Title } from "../title/title.component";
import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunts";
import { ReviewItem } from "./review-item/review-item.component";
import styles from "./styles.module.css";

export const RestaurantCard = ({ id }) => {
  const restaurant = useSelector((state) => selectRestarauntById(state, id));

  if (!isValidRestaurantGuard(restaurant)) return null;

  return (
    <div className={styles.card} key={restaurant.id}>
      <Title name={restaurant.name} />
      <div>
        <h3>Menu</h3>
        <ul>
          {restaurant.menu.map((id) => (
            <li key={id} className={styles.item}>
              <RestaurantMenuItem id={id}></RestaurantMenuItem>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Reviews</h3>
        <ul className="restaurant-card__review-list">
          {restaurant.reviews.map(id => (
            <li key={id}>
              <ReviewItem id={id}></ReviewItem>
            </li>
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
