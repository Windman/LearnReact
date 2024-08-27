import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReviewItem } from "../../restaurant-card/review-item/review-item.component";
import { ReviewForm } from "../../restaurant-card/review-form/review-form.component";
import { selectReviewIds } from "../../../redux/entities/reviews";
import { getReviews } from "../../../redux/entities/reviews/get-reviews";
import { useRequest } from "../../../hooks/use-request";

export const RestaurantReviewPage = () => {
  const { restId } = useParams();
  const ids = useSelector(selectReviewIds, restId);
  const requestStatus = useRequest(getReviews, restId);

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
      <h3>Reviews</h3>
      <ul className="restaurant-card__review-list">
        {ids.map((id) => (
          <li key={id}>
            <ReviewItem id={id}></ReviewItem>
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
