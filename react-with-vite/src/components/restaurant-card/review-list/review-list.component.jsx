import { useSelector } from "react-redux";
import { selectReviewById } from "../../../redux/entities/reviews";
import { selectUserById } from "../../../redux/entities/users";

export const ReviewList = ({ reviewsIds }) => {
  const reviews = useSelector((state) => {
    return reviewsIds.map((id) => selectReviewById(state, id));
  });

  const user = useSelector((state, id) => {
    return (id) => selectUserById(state, id);
  });

  return (
    <>
      <h3>Reviews</h3>
      <ul className="restaurant-card__review-list">
        {reviews.map((reviewItem) => (
          <li key={reviewItem.id}>
            {user(reviewItem.userId).name} - {reviewItem.text}
          </li>
        ))}
      </ul>
    </>
  );
};
