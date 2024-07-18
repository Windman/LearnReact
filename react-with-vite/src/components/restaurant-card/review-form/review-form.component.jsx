import { useReviewForm } from "./review-form.hook";
import { Counter } from "../../counter/counter.component";

const counterSettings = {min: 1, max: 5};

export const ReviewForm = () => {
  const { form, updateField, resetForm } = useReviewForm();
  const { name, text, rating } = form;

  const increment = () => {
    if (rating >= counterSettings.max) {
      return;
    }
    updateField("setRating", rating + 1);
  };
  const decrement = () => {
    if (rating <= counterSettings.min) {
      return;
    }
    updateField("setRating", rating - 1);
  };

  return (
    <div>
      <div className="df">
        <span className="form__label">Name</span>
        <input
          value={name}
          onChange={(event) => {
            updateField("setName", event.target.value);
          }}
        />
      </div>
      <div className="df">
        <span className="form__label">Text</span>
        <input
          value={text}
          onChange={(event) => {
            updateField("setText", event.target.value);
          }}
        />
      </div>
      <div className="df">
        <span className="form__label">Rating</span>
        {<Counter value={rating} increment={increment} decrement={decrement} />}
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            resetForm();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
