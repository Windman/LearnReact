import { useSelector } from "react-redux";
import { selectReviewById } from "../../../redux/entities/reviews";
import { Reviewer } from "../reviewer/reviewer.component";

export const ReviewItem = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  return (
    <div>
      <div>{review.text}</div>
      <div>
        <b>Review made by: </b><Reviewer id={review.userId}></Reviewer>
      </div>
    </div>
  );
};
