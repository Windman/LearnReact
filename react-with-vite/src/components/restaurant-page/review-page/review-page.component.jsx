import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReviewItem } from "../../restaurant-card/review-item/review-item.component";
import { ReviewForm } from "../../restaurant-card/review-form/review-form.component";
import { selectRestaurantById } from "../../../redux/entities/restaurants";

export const RestaurantReviewPage = () => {
  const { restId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restId)
  );
  return (
    <div>
      <h3>Reviews</h3>
      <ul className="restaurant-card__review-list">
        {restaurant.reviews.map((id) => (
          <li key={id}>
            <ReviewItem id={id}></ReviewItem>
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
